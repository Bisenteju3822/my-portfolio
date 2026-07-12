// noteNode.js — Add sticky notes/comments to the pipeline

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');

  return (
    <BaseNode
      title="Note"
      icon="🗒️"
      headerColor="linear-gradient(135deg, #84cc16, #65a30d)"
      inputs={[]}
      outputs={[]}
      style={{ width: 220 }}
    >
      <div className="node-field">
        <label>Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a comment or note about this pipeline..."
          rows={4}
          style={{ resize: 'vertical' }}
        />
      </div>
    </BaseNode>
  );
};
