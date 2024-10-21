import React, { useState } from 'react';

interface CheckboxProps {
  label: string; 
  required?: boolean; 
  onChange?: (checked: boolean) => void; 
}

const Checkbox: React.FC<CheckboxProps> = ({ label, required = false, onChange }) => {
  const [checked, setChecked] = useState(false); 
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked; 
    setChecked(isChecked); 
    if (onChange) {
      onChange(isChecked);
    }

    // Validation logic
    if (required && !isChecked) {
      setError('שדה זה הינו חובה !'); 
    } else {
      setError(''); 
    }
  };

  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange} 
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
      />
      <label className="ml-2 text-gray-700">{label}</label> 
      {error && <p className="text-red-500 text-sm ml-2">{error}</p>} 
    </div>
  );
};

export default Checkbox;
