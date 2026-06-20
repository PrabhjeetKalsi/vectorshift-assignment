// inputNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { TextField } from '../fields/TextField';
import { SelectField } from '../fields/SelectField';
import { useNodeField } from '../../hooks';

const TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'File', label: 'File' },
];

export const InputNode = ({ id, data }) => {
  const [name, setName] = useNodeField(
    id,
    'inputName',
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [type, setType] = useNodeField(id, 'inputType', data?.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      handles={[{ type: 'source', position: Position.Right, id: `${id}-value` }]}
    >
      <TextField label="Name" value={name} onChange={setName} />
      <SelectField label="Type" value={type} onChange={setType} options={TYPE_OPTIONS} />
    </BaseNode>
  );
};
