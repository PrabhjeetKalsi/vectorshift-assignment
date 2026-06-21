// TextAreaField.js
// A labelled multi-line text input.
// onChange receives the raw value, so a useNodeField setter can be passed directly.
//
// Pass autoResize to make the textarea grow in height with its content (the manual
// resize grip and fixed min-height are dropped via the `--auto` modifier class). This
// is used by the Text node (Part 3); the default (off) keeps the plain Note behavior.

import { useLayoutEffect, useRef } from 'react';
import { BaseField } from '../BaseField';

export const TextAreaField = ({ label, value, onChange, autoResize = false, style }) => {
  const ref = useRef(null);

  // Grow the textarea to fit its content: reset to 'auto' so it can shrink, then
  // match the scrollHeight. Runs on every value change (and on mount).
  useLayoutEffect(() => {
    if (!autoResize || !ref.current) return;
    const el = ref.current;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [autoResize, value]);

  return (
    <BaseField label={label} style={style}>
      <textarea
        ref={ref}
        className={autoResize ? 'nodrag node-field__textarea--auto' : 'nodrag'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </BaseField>
  );
};
