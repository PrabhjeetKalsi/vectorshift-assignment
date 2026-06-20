// textNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { TextField } from '../fields/TextField';
import { useNodeField } from '../../hooks';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useNodeField(id, 'text', data?.text || '{{input}}');

  return (
    <BaseNode
      title="Text"
      accent="text"
      handles={[{ type: 'source', position: Position.Right, id: `${id}-output` }]}
    >
      <TextField label="Text" value={text} onChange={setText} />
    </BaseNode>
  );
};
