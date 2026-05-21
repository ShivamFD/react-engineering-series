import React from 'react';

function Button({ text, onClick, variant = "primary" }) {
  return (
    <button 
      className="button"
      onClick={onClick}
      style={variant === "secondary" ? { background: "#64748b" } : {}}
    >
      {text}
    </button>
  );
}

export default Button;