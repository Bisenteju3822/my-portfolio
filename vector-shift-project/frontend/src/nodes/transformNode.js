// transformNode.js — Transforms/formats data using a template

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [format, setFormat] = useState(data?.format || 'json');
  const [expression, setExpression] = useState(data?.expression || '');

  return (
    <BaseNode
      title="Transform"
      icon="⚙️"
      headerColor="linear-gradient(135deg, #f97316, #ea580c)"
      inputs={[{ id: `${id}-input`, label: 'Input', style: { top: '52px' } }]}
      outputs={[{ id: `${id}-output`, label: 'Output', style: { top: '52px' } }]}
    >
      <div className="node-field">
        <label>Output Format</label>
        <div className="node-select-wrapper">
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="json">JSON</option>
            <option value="text">Plain Text</option>
            <option value="csv">CSV</option>
            <option value="markdown">Markdown</option>
          </select>
        </div>
      </div>
      <div className="node-field">
        <label>Expression</label>
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="e.g., data.results[0]"
        />
      </div>
    </BaseNode>
  );
};
