// textNode.js
// Part 3: Auto-resize + {{variable}} dynamic handles

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

// Extract valid JS variable names from {{varName}} patterns
const extractVariables = (text) => {
  const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
  const vars = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (!vars.includes(match[1])) {
      vars.push(match[1]);
    }
  }
  return vars;
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [nodeSize, setNodeSize] = useState({ width: 220, height: 'auto' });
  const textareaRef = useRef(null);

  const variables = extractVariables(currText);

  // Auto-resize textarea and node when text changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      const newWidth = Math.max(220, Math.min(500, currText.length * 7 + 80));
      setNodeSize({ width: newWidth });
    }
  }, [currText]);

  return (
    <div style={{ position: 'relative' }}>
      {/* Dynamic input handles for each {{variable}} */}
      {variables.map((varName, index) => {
        const topPercent = ((index + 1) / (variables.length + 1)) * 100;
        return (
          <Handle
            key={varName}
            type="target"
            position={Position.Left}
            id={`${id}-${varName}`}
            style={{ top: `${topPercent}%` }}
          />
        );
      })}

      <BaseNode
        title="Text"
        icon="📝"
        headerColor="linear-gradient(135deg, #3b82f6, #2563eb)"
        inputs={[]}
        outputs={[{ id: `${id}-output`, style: { top: '52px' } }]}
        style={{ width: nodeSize.width }}
      >
        {/* Show detected variable handles as labels */}
        {variables.length > 0 && (
          <div className="variable-tags">
            {variables.map((v) => (
              <span key={v} className="variable-tag">
                {`{{${v}}}`}
              </span>
            ))}
          </div>
        )}

        <div className="node-field">
          <label>Text</label>
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            placeholder="Type text... use {{variable}} to create input handles"
            rows={3}
          />
        </div>
      </BaseNode>
    </div>
  );
};
