import React, { useState } from 'react';

interface SelectOption {
  value: string;
  label: string; 
}

interface SelectProps {
  options: SelectOption[];
  name: string; 
  required?: boolean; 
  onChange?: (value: string) => void; 
}

const Select: React.FC<SelectProps> = ({ options, name, required = false, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>(''); 
  const [error, setError] = useState(''); 

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value; 
    setSelectedValue(value); 
    if (onChange) {
      onChange(value); 
    }

   
    if (required && value === '') {
      setError('This field is required.'); 
    } else {
      setError('');
    }
  };

  return (
    <div className="mb-4">
      <select
        name={name} 
        value={selectedValue} 
        onChange={handleChange}
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>Select an option</option> 
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label} 
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>} 
    </div>
  );
};

export default Select;
