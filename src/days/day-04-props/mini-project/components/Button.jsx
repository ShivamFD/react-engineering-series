import React from 'react';

function Button({ text, onClick, color = "#3b82f6" }) {
  return (
    <button 
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="button"
    >
      {text}
    </button>
  );
}

export default Button;