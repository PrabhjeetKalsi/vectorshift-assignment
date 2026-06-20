// filterNode.js
// Demo node: passes input through when a condition is met.

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { TextField } from '../fields/TextField';
import { useNodeField } from '../../hooks';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useNodeField(id, 'condition', data?.condition || '');

  return (
    <BaseNode
      title="Filter"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <TextField label="Condition" value={condition} onChange={setCondition} />
    </BaseNode>
  );
};
