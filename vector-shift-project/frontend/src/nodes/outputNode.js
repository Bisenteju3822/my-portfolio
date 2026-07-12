// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      icon="📤"
      headerColor="linear-gradient(135deg, #10b981, #059669)"
      inputs={[{ id: `${id}-value`, style: { top: '50%' } }]}
      outputs={[]}
    >
      <div className="node-field">
        <label>Name</label>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          placeholder="output_name"
        />
      </div>
      <div className="node-field">
        <label>Type</label>
        <div className="node-select-wrapper">
          <select value={outputType} onChange={(e) => setOutputType(e.target.value)}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
