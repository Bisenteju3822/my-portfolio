// toolbar.js

import { DraggableNode } from './draggableNode';

const nodes = [
  { type: 'customInput',  label: 'Input',     icon: '📥', color: '#6366f1' },
  { type: 'customOutput', label: 'Output',    icon: '📤', color: '#10b981' },
  { type: 'llm',          label: 'LLM',       icon: '🤖', color: '#f59e0b' },
  { type: 'text',         label: 'Text',      icon: '📝', color: '#3b82f6' },
  { type: 'filter',       label: 'Filter',    icon: '🔍', color: '#ef4444' },
  { type: 'math',         label: 'Math',      icon: '➕', color: '#8b5cf6' },
  { type: 'api',          label: 'API Call',  icon: '🌐', color: '#06b6d4' },
  { type: 'transform',    label: 'Transform', icon: '⚙️', color: '#f97316' },
  { type: 'note',         label: 'Note',      icon: '🗒️', color: '#84cc16' },
];

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <span className="toolbar-logo">VectorShift</span>
      <div className="toolbar-divider" />
      <span className="toolbar-label">Nodes</span>
      <div className="toolbar-nodes">
        {nodes.map((node) => (
          <DraggableNode
            key={node.type}
            type={node.type}
            label={node.label}
            icon={node.icon}
            color={node.color}
          />
        ))}
      </div>
    </div>
  );
};
