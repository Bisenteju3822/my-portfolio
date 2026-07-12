// mathNode.js — Performs a math operation on two inputs

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  return (
    <BaseNode
      title="Math"
      icon="➕"
      headerColor="linear-gradient(135deg, #8b5cf6, #7c3aed)"
      inputs={[
        { id: `${id}-a`, label: 'A', style: { top: '52px' } },
        { id: `${id}-b`, label: 'B', style: { top: '78px' } },
      ]}
      outputs={[{ id: `${id}-result`, label: 'Result', style: { top: '52px' } }]}
    >
      <div className="node-field">
        <label>Operation</label>
        <div className="node-select-wrapper">
          <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="add">Add (A + B)</option>
            <option value="subtract">Subtract (A − B)</option>
            <option value="multiply">Multiply (A × B)</option>
            <option value="divide">Divide (A ÷ B)</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
