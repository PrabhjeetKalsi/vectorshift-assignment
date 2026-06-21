// conditionNode.js
// Demo node: routes input down a true/false branch based on a condition.

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const ConditionNode = ({ id }) => (
  <BaseNode
    title="Condition"
    accent="condition"
    handles={[
      { type: 'target', position: Position.Left, id: `${id}-input` },
      { type: 'source', position: Position.Right, id: `${id}-true` },
      { type: 'source', position: Position.Right, id: `${id}-false` },
    ]}
  >
    <span>Branch on a condition.</span>
  </BaseNode>
);
