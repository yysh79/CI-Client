import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void; 
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick} 
      disabled={disabled} 
      className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        disabled ? 'opacity-50 cursor-not-allowed' : '' 
      }`}
    >
      {label} 
    </button>
  );
};

export default Button;
