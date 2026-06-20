// BaseField.js
// --------------------------------------------------
// A presentational shell shared by every field type, mirroring BaseNode.
// It owns only what is common to all fields: the labelled <label> wrapper and
// its block layout. The actual control (input/select/textarea) is nested
// inside and rendered via {children}:
//
//   <BaseField label="URL">
//     <input ... />
//   </BaseField>
//
// Callers can override or extend the wrapper styling via the style prop.

const fieldStyle = { display: 'block' };

export const BaseField = ({ label, style, children }) => (
  <label style={{ ...fieldStyle, ...style }}>
    {label ? `${label}: ` : null}
    {children}
  </label>
);
