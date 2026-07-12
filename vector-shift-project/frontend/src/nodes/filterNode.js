// filterNode.js — Filters data based on a condition

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');
  const [field, setField] = useState(data?.field || '');

  return (
    <BaseNode
      title="Filter"
      icon="🔍"
      headerColor="linear-gradient(135deg, #ef4444, #dc2626)"
      inputs={[{ id: `${id}-input`, style: { top: '65px' } }]}
      outputs={[
        { id: `${id}-true`,  label: 'True',  style: { top: '52px' } },
        { id: `${id}-false`, label: 'False', style: { top: '78px' } },
      ]}
    >
      <div className="node-field">
        <label>Field</label>
        <input
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          placeholder="e.g., score"
        />
      </div>
      <div className="node-field">
        <label>Condition</label>
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g., > 0.5"
        />
      </div>
    </BaseNode>
  );
};
