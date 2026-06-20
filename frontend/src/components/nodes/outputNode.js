// outputNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { TextField } from '../fields/TextField';
import { SelectField } from '../fields/SelectField';
import { useNodeField } from '../../hooks';

const TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'File', label: 'Image' },
];

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useNodeField(
    id,
    'outputName',
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [type, setType] = useNodeField(id, 'outputType', data?.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      handles={[{ type: 'target', position: Position.Left, id: `${id}-value` }]}
    >
      <TextField label="Name" value={name} onChange={setName} />
      <SelectField label="Type" value={type} onChange={setType} options={TYPE_OPTIONS} />
    </BaseNode>
  );
};
