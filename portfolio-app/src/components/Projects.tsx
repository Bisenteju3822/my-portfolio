import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Search, Gamepad2, Stethoscope, Workflow, Bot, ShoppingCart, Brain, Server } from 'lucide-react'
import { GithubIcon } from './icons'

const projects = [
  {
    title: 'AI Semantic Search Engine',
    description: 'Full-pipeline semantic search: ingests product data, generates embeddings via OpenAI, stores in PostgreSQL with pgvector, retrieves via cosine similarity through OpenSearch.',
    icon: Search,
    tech: ['NestJS', 'OpenSearch', 'pgvector', 'OpenAI', 'RAG'],
    gradient: 'linear-gradient(135deg, #6366f1, #22d3ee)',
    features: ['Vector embeddings', 'Cosine similarity', 'Multi-model support', 'Real-time indexing'],
    github: 'https://github.com/Bisenteju3822/my-portfolio/tree/main/Magento-New-clean',
  },
  {
    title: 'AI Pipeline Builder',
    description: '9 custom node types using ReactFlow and Zustand. BaseNode abstraction reducing per-node code by 70%, dynamic {{variable}} handles, DAG cycle detection via DFS 3-color algorithm.',
    icon: Workflow,
    tech: ['React', 'ReactFlow', 'Zustand', 'FastAPI', 'Python'],
    gradient: 'linear-gradient(135deg, #a78bfa, #ec4899)',
    features: ['9 custom nodes', 'DAG detection', 'Dynamic handles', 'Dark themed UI'],
    github: 'https://github.com/Bisenteju3822/my-portfolio/tree/main/vector-shift-project',
  },
  {
    title: 'Multiplayer Game Server',
    description: 'Low-latency real-time game server with deterministic state sync, latency compensation, and server-side anti-cheat. Scales room capacity dynamically under load.',
    icon: Gamepad2,
    tech: ['Node.js', 'Colyseus', 'WebSocket', 'Redis', 'Kafka'],
    gradient: 'linear-gradient(135deg, #34d399, #14b8a6)',
    features: ['1000+ concurrent', 'Anti-cheat', 'Matchmaking', '40% faster'],
    github: 'https://github.com/Bisenteju3822/my-portfolio',
  },
  {
    title: 'Healthcare Platform',
    subtitle: 'Neuro Foundation Hospital',
    description: 'FHIR-compliant healthcare platform: patient management, appointment scheduling, clinical notes, lab investigations, OT management, and OHIF medical image viewing.',
    icon: Stethoscope,
    tech: ['React', 'NestJS', 'PostgreSQL', 'FHIR', 'OHIF', 'DICOM'],
    gradient: 'linear-gradient(135deg, #f43f5e, #f97316)',
    features: ['FHIR HL7', 'OT Management', 'DICOM viewer', 'Clinical notes'],
    github: 'https://github.com/Bisenteju3822/my-portfolio',
  },
  {
    title: 'AI Clinical Agent',
    description: 'LangChain-powered clinical assistant for patient data analysis, clinical decision support, and automated documentation. RAG-based retrieval for hospital policies.',
    icon: Bot,
    tech: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'RAG', 'MCP'],
    gradient: 'linear-gradient(135deg, #f59e0b, #eab308)',
    features: ['RAG pipeline', 'Decision support', 'MCP Server', 'LangGraph'],
    github: 'https://github.com/Bisenteju3822/my-portfolio/tree/main/AI-Agent',
  },
  {
    title: 'VectorShift AI Platform',
    description: 'Full-stack AI pipeline platform with visual workflow builder. Backend API integration for automated AI pipeline execution and intelligent task orchestration.',
    icon: Brain,
    tech: ['React', 'Node.js', 'FastAPI', 'Python'],
    gradient: 'linear-gradient(135deg, #38bdf8, #3b82f6)',
    features: ['Visual builder', 'API orchestration', 'Auto workflows', 'Task management'],
    github: 'https://github.com/Bisenteju3822/my-portfolio/tree/main/vector-shift-project',
  },
  {
    title: 'DecideIt - AI Decisions',
    description: 'AI-powered product decision platform for data-driven decisions. Next.js with intelligent recommendation engine and collaborative workflows.',
    icon: ShoppingCart,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Docker', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    features: ['AI recommendations', 'Collaboration', 'Data insights', 'Real-time'],
    github: 'https://github.com/Bisenteju3822/my-portfolio/tree/main/My-Dream-project',
  },
  {
    title: 'OT Management System',
    subtitle: 'Neuro Foundation Hospital',
    description: 'Surgery scheduling, resource allocation, team assignment, and real-time status tracking for comprehensive hospital Operation Theater management.',
    icon: Server,
    tech: ['React', 'NestJS', 'PostgreSQL', 'Tailwind', 'FHIR'],
    gradient: 'linear-gradient(135deg, #14b8a6, #22c55e)',
    features: ['Surgery scheduling', 'Resources', 'Real-time', 'Hospital workflow'],
    github: 'https://github.com/Bisenteju3822/my-portfolio',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: '#818cf8', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, marginBottom: 8, letterSpacing: '0.05em' }}>
            {'// projects'}
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#f3f4f6', marginBottom: 48, letterSpacing: '-0.02em' }}>
            What I've{' '}
            <span className="gradient-text">Built</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }} className="projects-grid">
            {projects.map((project, i) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="project-card"
                >
                  {/* Top gradient bar */}
                  <div style={{ height: 3, background: project.gradient }} />

                  <div style={{ padding: 28 }}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 14,
                        background: project.gradient,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      }}>
                        <Icon size={24} style={{ color: '#fff' }} />
                      </div>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 34, height: 34, borderRadius: 8,
                          color: '#6b7280', transition: 'all 0.2s',
                          background: 'rgba(255,255,255,0.03)',
                        }}>
                          <GithubIcon size={16} />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 34, height: 34, borderRadius: 8,
                          color: '#6b7280', transition: 'all 0.2s',
                          background: 'rgba(255,255,255,0.03)',
                        }}>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f3f4f6', marginBottom: 4 }}>
                      {project.title}
                    </h3>
                    {'subtitle' in project && (
                      <p style={{ fontSize: 12, color: '#6366f1', marginBottom: 8, fontWeight: 500 }}>
                        {project.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.7, marginBottom: 20 }}>
                      {project.description}
                    </p>

                    {/* Features */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
                      {project.features.map((f) => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#6b7280' }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: project.gradient, flexShrink: 0 }} />
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 16 }}>
                      {project.tech.map((t) => (
                        <span key={t} style={{
                          padding: '3px 10px', fontSize: 11, borderRadius: 6,
                          background: 'rgba(255,255,255,0.03)',
                          color: '#9ca3af',
                          border: '1px solid rgba(255,255,255,0.05)',
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
