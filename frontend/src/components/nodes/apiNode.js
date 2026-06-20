// apiNode.js
// Demo node: makes an outbound HTTP request.

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { TextField } from '../fields/TextField';
import { SelectField } from '../fields/SelectField';
import { useNodeField } from '../../hooks';

const METHOD_OPTIONS = [
  { value: 'GET', label: 'GET' },
  { value: 'POST', label: 'POST' },
  { value: 'PUT', label: 'PUT' },
  { value: 'DELETE', label: 'DELETE' },
];

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useNodeField(id, 'url', data?.url || 'https://');
  const [method, setMethod] = useNodeField(id, 'method', data?.method || 'GET');

  return (
    <BaseNode
      title="API Call"
      accent="api"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-body` },
        { type: 'source', position: Position.Right, id: `${id}-response` },
      ]}
    >
      <TextField label="URL" value={url} onChange={setUrl} />
      <SelectField label="Method" value={method} onChange={setMethod} options={METHOD_OPTIONS} />
    </BaseNode>
  );
};
