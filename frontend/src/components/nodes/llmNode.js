// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const LLMNode = ({ id }) => (
  <BaseNode
    title="LLM"
    accent="llm"
    handles={[
      { type: 'target', position: Position.Left, id: `${id}-system` },
      { type: 'target', position: Position.Left, id: `${id}-prompt` },
      { type: 'source', position: Position.Right, id: `${id}-response` },
    ]}
  >
    <span>This is a LLM.</span>
  </BaseNode>
);
