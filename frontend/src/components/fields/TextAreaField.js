// TextAreaField.js
// A labelled multi-line text input.
// onChange receives the raw value, so a useNodeField setter can be passed directly.

import { BaseField } from '../BaseField';

export const TextAreaField = ({ label, value, onChange, style }) => (
  <BaseField label={label} style={style}>
    <textarea value={value} onChange={(e) => onChange(e.target.value)} />
  </BaseField>
);
