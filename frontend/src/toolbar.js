// toolbar.js

import { DraggableNode } from './draggableNode';

// Each entry carries the accent key so a palette chip and its node share a
// color (index.css) and icon (icons.js).
const NODE_TYPES = [
  { type: 'customInput', label: 'Input', accent: 'input' },
  { type: 'llm', label: 'LLM', accent: 'llm' },
  { type: 'customOutput', label: 'Output', accent: 'output' },
  { type: 'text', label: 'Text', accent: 'text' },
  { type: 'filter', label: 'Filter', accent: 'filter' },
  { type: 'math', label: 'Math', accent: 'math' },
  { type: 'api', label: 'API Call', accent: 'api' },
  { type: 'note', label: 'Note', accent: 'note' },
  { type: 'delay', label: 'Delay', accent: 'delay' },
];

export const PipelineToolbar = () => {
  return (
    <div className="palette">
      <span className="palette__label">Nodes</span>
      <div className="palette__items">
        {NODE_TYPES.map((node) => (
          <DraggableNode
            key={node.type}
            type={node.type}
            label={node.label}
            accent={node.accent}
          />
        ))}
      </div>
    </div>
  );
};
