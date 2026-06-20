// SelectField.js
// A labelled dropdown driven by an options array of { value, label }.
// onChange receives the raw value, so a useNodeField setter can be passed directly.

import { BaseField } from '../BaseField';

export const SelectField = ({ label, value, onChange, options, style }) => (
  <BaseField label={label} style={style}>
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </BaseField>
);
