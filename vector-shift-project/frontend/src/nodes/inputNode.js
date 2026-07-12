// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      icon="📥"
      headerColor="linear-gradient(135deg, #6366f1, #8b5cf6)"
      inputs={[]}
      outputs={[{ id: `${id}-value`, style: { top: '50%' } }]}
    >
      <div className="node-field">
        <label>Name</label>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          placeholder="input_name"
        />
      </div>
      <div className="node-field">
        <label>Type</label>
        <div className="node-select-wrapper">
          <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
