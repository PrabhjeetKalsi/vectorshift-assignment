// BaseNode.js
// --------------------------------------------------
// A presentational shell shared by every node type. It owns only what is
// common to all nodes: the outer container/styling, the title bar, and the
// layout of connection handles. The actual inner field DOM is nested inside
// the element by each node and rendered here via {children}:
//
//   <BaseNode title="Input" handles={[...]}>
//     <input ... />
//   </BaseNode>
//
// Handles declared on the same side are automatically distributed evenly
// along that side, so callers only need to say which side a handle is on.

import { Handle, Position } from 'reactflow';

const nodeStyle = {
  width: 200,
  minHeight: 80,
  border: '1px solid black',
  padding: 4,
  boxSizing: 'border-box',
};

const isVertical = (position) =>
  position === Position.Left || position === Position.Right;

export const BaseNode = ({ title, handles = [], style, children }) => {
  // Group handles by side so we can space them evenly along each edge.
  const handlesBySide = handles.reduce((acc, handle) => {
    (acc[handle.position] = acc[handle.position] || []).push(handle);
    return acc;
  }, {});

  return (
    <div style={{ ...nodeStyle, ...style }}>
      {Object.entries(handlesBySide).flatMap(([position, group]) =>
        group.map((handle, index) => {
          const offset = ((index + 1) / (group.length + 1)) * 100;
          const axis = isVertical(position) ? 'top' : 'left';
          return (
            <Handle
              key={handle.id}
              type={handle.type}
              position={handle.position}
              id={handle.id}
              style={{ [axis]: `${offset}%`, ...handle.style }}
            />
          );
        })
      )}

      <div>
        <strong>{title}</strong>
      </div>

      {children}
    </div>
  );
};
