// knowledgeBaseNode.js
// Demo node: semantic search over an indexed knowledge base (RAG retrieval).

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';

export const KnowledgeBaseNode = ({ id }) => (
  <BaseNode
    title="Knowledge Base"
    accent="knowledge"
    handles={[
      { type: 'target', position: Position.Left, id: `${id}-query` },
      { type: 'source', position: Position.Right, id: `${id}-results` },
    ]}
  >
    <span>Search indexed documents.</span>
  </BaseNode>
);
