// apiNode.js — Makes an HTTP API call

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      title="API Call"
      icon="🌐"
      headerColor="linear-gradient(135deg, #06b6d4, #0891b2)"
      inputs={[{ id: `${id}-body`, label: 'Body', style: { top: '52px' } }]}
      outputs={[
        { id: `${id}-response`, label: 'Response', style: { top: '52px' } },
        { id: `${id}-error`,    label: 'Error',    style: { top: '78px' } },
      ]}
    >
      <div className="node-field">
        <label>Method</label>
        <div className="node-select-wrapper">
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
      </div>
      <div className="node-field">
        <label>URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com/endpoint"
        />
      </div>
    </BaseNode>
  );
};
