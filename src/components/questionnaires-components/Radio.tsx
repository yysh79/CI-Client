import React, { useState } from 'react';

interface RadioOption {
  value: string; 
  label: string; 
}

interface RadioProps {
  options: RadioOption[]; 
  name: string; 
  required?: boolean; 
  onChange?: (value: string) => void; 
}

const Radio: React.FC<RadioProps> = ({ options, name, required = false, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>(''); 
  const [error, setError] = useState(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; 
    setSelectedValue(value); 
    if (onChange) {
      onChange(value); 
    }

    // Validation logic
    if (required && !value) {
      setError('This field is required.'); 
    } else {
      setError(''); 
    }
  };

  return (
    <div className="mb-4">
      {options.map((option) => (
        <div key={option.value} className="flex items-center mb-2">
          <input
            type="radio"
            value={option.value}
            name={name}
            checked={selectedValue === option.value} 
            onChange={handleChange} 
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
          />
          <label className="ml-2 text-gray-700">{option.label}</label>
        </div>
      ))}
      {error && <p className="text-red-500 text-sm">{error}</p>} 
    </div>
  );
};

export default Radio;
