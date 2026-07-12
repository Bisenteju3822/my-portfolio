// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      icon="🤖"
      headerColor="linear-gradient(135deg, #f59e0b, #d97706)"
      inputs={[
        { id: `${id}-system`, label: 'System', style: { top: '52px' } },
        { id: `${id}-prompt`, label: 'Prompt', style: { top: '78px' } },
      ]}
      outputs={[
        { id: `${id}-response`, label: 'Response', style: { top: '52px' } },
      ]}
    />
  );
};
