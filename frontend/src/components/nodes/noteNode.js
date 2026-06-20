// noteNode.js
// Demo node: a free-form comment with no connections (handles are optional).

import { BaseNode } from '../BaseNode';
import { TextAreaField } from '../fields/TextAreaField';
import { useNodeField } from '../../hooks';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useNodeField(id, 'note', data?.note || 'Write a note...');

  return (
    <BaseNode title="Note" accent="note">
      <TextAreaField label="Note" value={note} onChange={setNote} />
    </BaseNode>
  );
};
