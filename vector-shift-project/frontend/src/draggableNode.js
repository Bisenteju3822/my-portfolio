// draggableNode.js

export const DraggableNode = ({ type, label, icon, color }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="draggable-node"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{ borderColor: color ? `${color}55` : undefined }}
      draggable
    >
      {icon && <span className="draggable-node-icon">{icon}</span>}
      <span>{label}</span>
    </div>
  );
};
  