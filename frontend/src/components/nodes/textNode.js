// textNode.js
// --------------------------------------------------
// The Text node holds a *template* string. Beyond plain text it supports
// `{{ variable }}` placeholders: each distinct, valid JS variable name becomes a
// left-side input Handle, so an upstream node can be wired into that slot. The
// rendered text leaves via the single output handle on the right.
//
// The textarea also auto-grows in height as the user types (width stays fixed).

import { useEffect, useMemo } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { TextAreaField } from '../fields/TextAreaField';
import { useNodeField } from '../../hooks';

// Match `{{ name }}` where name is a valid JS identifier. The identifier pattern
// itself rejects malformed names (`{{ 1bad }}`, `{{ }}`), so no extra validation
// is needed. Returns the distinct variable names in first-seen order.
const parseVariables = (text) => {
  const pattern = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;
  const seen = new Set();
  for (const match of text.matchAll(pattern)) {
    seen.add(match[1]);
  }
  return [...seen];
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useNodeField(id, 'text', data?.text || '{{input}}');
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => parseVariables(text), [text]);

  const handles = useMemo(
    () => [
      { type: 'source', position: Position.Right, id: `${id}-output` },
      ...variables.map((name) => ({
        type: 'target',
        position: Position.Left,
        id: `${id}-${name}`,
      })),
    ],
    [id, variables]
  );

  // Handles change as variables are added/removed, and the node grows taller as
  // text is typed — both require ReactFlow to recompute handle/edge geometry.
  useEffect(() => {
    updateNodeInternals(id);
  }, [id, variables, text, updateNodeInternals]);

  return (
    <BaseNode title="Text" accent="text" handles={handles}>
      <TextAreaField label="Text" value={text} onChange={setText} autoResize />
    </BaseNode>
  );
};
