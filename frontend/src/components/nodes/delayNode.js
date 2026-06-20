// delayNode.js
// Demo node: passes input to output after a delay.

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { TextField } from '../fields/TextField';
import { useNodeField } from '../../hooks';

export const DelayNode = ({ id, data }) => {
  const [seconds, setSeconds] = useNodeField(id, 'seconds', data?.seconds ?? 1);

  return (
    <BaseNode
      title="Delay"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-in` },
        { type: 'source', position: Position.Right, id: `${id}-out` },
      ]}
    >
      <TextField label="Seconds" type="number" value={seconds} onChange={setSeconds} />
    </BaseNode>
  );
};
