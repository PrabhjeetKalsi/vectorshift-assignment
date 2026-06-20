// mathNode.js
// Demo node: combines two inputs with an arithmetic operation.

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { SelectField } from '../fields/SelectField';
import { useNodeField } from '../../hooks';

const OPERATION_OPTIONS = [
  { value: 'add', label: '+' },
  { value: 'subtract', label: '−' },
  { value: 'multiply', label: '×' },
  { value: 'divide', label: '÷' },
];

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useNodeField(id, 'operation', data?.operation || 'add');

  return (
    <BaseNode
      title="Math"
      accent="math"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-a` },
        { type: 'target', position: Position.Left, id: `${id}-b` },
        { type: 'source', position: Position.Right, id: `${id}-result` },
      ]}
    >
      <SelectField label="Op" value={operation} onChange={setOperation} options={OPERATION_OPTIONS} />
    </BaseNode>
  );
};
