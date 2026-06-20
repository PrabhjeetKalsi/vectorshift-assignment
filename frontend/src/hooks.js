// hooks.js
// --------------------------------------------------
// Shared React hooks for node components.
//
// useNodeField: small helper that holds a single node field's value in local state while
// also syncing every change to the zustand store via updateNodeField (so the
// value is available later, e.g. when submitting the pipeline in Part 4).
//
// This is plumbing only — each node still writes its own field DOM:
//   const [name, setName] = useNodeField(id, 'inputName', 'input_1');
//   <input value={name} onChange={(e) => setName(e.target.value)} />

import { useState } from 'react';
import { useStore } from './store';

export const useNodeField = (id, name, initial) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [value, setValue] = useState(initial);

  const onChange = (next) => {
    setValue(next);
    updateNodeField(id, name, next);
  };

  return [value, onChange];
};
