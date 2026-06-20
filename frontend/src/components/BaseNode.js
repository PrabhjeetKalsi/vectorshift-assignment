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
import Icon from '@mdi/react';
import { NODE_ICONS } from '../icons';

const isVertical = (position) =>
  position === Position.Left || position === Position.Right;

export const BaseNode = ({ title, icon, accent = 'default', handles = [], style, children }) => {
  // Group handles by side so we can space them evenly along each edge.
  const handlesBySide = handles.reduce((acc, handle) => {
    (acc[handle.position] = acc[handle.position] || []).push(handle);
    return acc;
  }, {});

  // Icon is derived from the accent via the central registry, but an explicit
  // `icon` (mdi path) prop can override it for one-off nodes.
  const iconPath = icon || NODE_ICONS[accent];

  return (
    <div className="node-card" data-accent={accent} style={style}>
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

      <div className="node-card__title">
        {iconPath ? <Icon className="node-card__icon" path={iconPath} size={0.75} /> : null}
        {title}
      </div>

      <div className="node-card__body">{children}</div>
    </div>
  );
};
