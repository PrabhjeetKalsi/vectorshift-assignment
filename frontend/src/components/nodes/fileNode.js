// fileNode.js
// Demo node: loads a document (PDF/CSV/text) as pipeline input.

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const FileNode = ({ id }) => (
  <BaseNode
    title="File"
    accent="file"
    handles={[{ type: 'source', position: Position.Right, id: `${id}-content` }]}
  >
    <span>Load a document.</span>
  </BaseNode>
);
