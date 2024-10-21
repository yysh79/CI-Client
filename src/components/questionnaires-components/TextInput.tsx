import React, { useState } from 'react';

interface TextInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  validationPattern?: RegExp;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder = '', 
  required = false,
  validationPattern
}) => {
  const [value, setValue] = useState<string>(''); 
  const [error, setError] = useState<string>(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // Validation logic
    if (required && inputValue.trim() === '') {
      setError('שדה זה הינו חובה !');
    } else if (validationPattern && !validationPattern.test(inputValue)) {
      setError('פורמט לא תקין !');
    } else {
      setError('');
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
