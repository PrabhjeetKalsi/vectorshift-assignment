// integrationNode.js
// Demo node: sends pipeline output to an external service (Slack, Gmail, etc.).

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const IntegrationNode = ({ id }) => (
  <BaseNode
    title="Integration"
    accent="integration"
    handles={[
      { type: 'target', position: Position.Left, id: `${id}-input` },
      { type: 'source', position: Position.Right, id: `${id}-output` },
    ]}
  >
    <span>Send to an external app.</span>
  </BaseNode>
);
