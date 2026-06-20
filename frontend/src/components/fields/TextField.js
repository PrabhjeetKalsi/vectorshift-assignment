// TextField.js
// A labelled text input. Pass type="number" for numeric input.
// onChange receives the raw value, so a useNodeField setter can be passed directly.

import { BaseField } from '../BaseField';

export const TextField = ({ label, value, onChange, type = 'text', style }) => (
  <BaseField label={label} style={style}>
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
  </BaseField>
);
