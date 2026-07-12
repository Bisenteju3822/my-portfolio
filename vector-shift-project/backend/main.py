from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Any

app = FastAPI()

# Allow requests from React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class PipelineData(BaseModel):
    nodes: List[Any]
    edges: List[Any]


def check_is_dag(nodes: list, edges: list) -> bool:
    """Check if the graph formed by nodes and edges is a Directed Acyclic Graph."""
    # Build adjacency list
    graph = {node['id']: [] for node in nodes}
    for edge in edges:
        src = edge.get('source')
        tgt = edge.get('target')
        if src in graph:
            graph[src].append(tgt)

    # DFS cycle detection using 3-color marking
    # 0 = unvisited, 1 = visiting (in current path), 2 = done
    color = {node['id']: 0 for node in nodes}

    def dfs(node_id: str) -> bool:
        color[node_id] = 1
        for neighbor in graph.get(node_id, []):
            if color.get(neighbor) == 1:
                return False  # cycle detected
            if color.get(neighbor) == 0:
                if not dfs(neighbor):
                    return False
        color[node_id] = 2
        return True

    for node_id in graph:
        if color[node_id] == 0:
            if not dfs(node_id):
                return False
    return True


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag = check_is_dag(nodes, edges)

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag,
    }
