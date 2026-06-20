// draggableNode.js

import Icon from '@mdi/react';
import { NODE_ICONS } from './icons';

export const DraggableNode = ({ type, label, accent = 'default' }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const iconPath = NODE_ICONS[accent];

  return (
    <div
      className="palette-chip"
      data-accent={accent}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      {iconPath ? (
        <span className="palette-chip__icon">
          <Icon path={iconPath} size={0.7} />
        </span>
      ) : null}
      <span>{label}</span>
    </div>
  );
};
