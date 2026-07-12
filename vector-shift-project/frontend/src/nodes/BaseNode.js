// BaseNode.js
// Reusable base component for all pipeline nodes

import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  icon,
  headerColor = 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  inputs = [],
  outputs = [],
  children,
  style = {},
}) => {
  const labeledInputs  = inputs.filter(h => h.label);
  const labeledOutputs = outputs.filter(h => h.label);
  const maxRows = Math.max(labeledInputs.length, labeledOutputs.length);

  return (
    <div className="base-node" style={style}>

      {/* Handles — positioned via handle.style (pixel top values) */}
      {inputs.map(h => (
        <Handle
          key={h.id}
          type="target"
          position={Position.Left}
          id={h.id}
          style={h.style || {}}
        />
      ))}
      {outputs.map(h => (
        <Handle
          key={h.id}
          type="source"
          position={Position.Right}
          id={h.id}
          style={h.style || {}}
        />
      ))}

      {/* Header */}
      <div className="node-header" style={{ background: headerColor }}>
        {icon && <span className="node-header-icon">{icon}</span>}
        <span className="node-header-title">{title}</span>
      </div>

      {/* Handle label rows — rendered inside body, aligned with handle dots */}
      {maxRows > 0 && (
        <div className="node-handle-rows">
          {Array.from({ length: maxRows }).map((_, i) => (
            <div key={i} className="node-handle-row">
              <span className="node-handle-label-left">
                {labeledInputs[i]?.label || ''}
              </span>
              <span className="node-handle-label-right">
                {labeledOutputs[i]?.label || ''}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Node body — fields and custom content */}
      {children && (
        <div className="node-body">{children}</div>
      )}

    </div>
  );
};
