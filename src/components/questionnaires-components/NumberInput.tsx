import React, { useState } from 'react';

interface NumberInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  min?: number; 
  max?: number; 
}

const NumberInput: React.FC<NumberInputProps> = ({ label, placeholder, required = false, min, max }) => {
  const [value, setValue] = useState<number | ''>(''); 
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value ? Number(e.target.value) : ''; 
    setValue(inputValue);

    // Validation logic
    if (required && inputValue === '') {
      setError('שדה זה הינו חובה !');
    } else if (typeof inputValue === 'number') { 
      if (min !== undefined && inputValue < min) {
        setError(`Value must be at least ${min}.`);
      } else if (max !== undefined && inputValue > max) {
        setError(`Value must not exceed ${max}.`);
      } else {
        setError(''); 
      }
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        min={min}
        max={max} 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default NumberInput;
