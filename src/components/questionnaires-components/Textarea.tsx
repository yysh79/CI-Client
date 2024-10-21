import React, { useState } from 'react';

interface TextareaProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number; 
  maxLength?: number; 
}

const Textarea: React.FC<TextareaProps> = ({ label, placeholder, required = false, minLength, maxLength }) => {
  const [value, setValue] = useState<string>(''); 
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value; 
    setValue(inputValue);

    // Validation logic
    if (required && inputValue.trim() === '') {
      setError('This field is required.');
    } else if (minLength !== undefined && inputValue.length < minLength) {
      setError(`Minimum length is ${minLength} characters.`);
    } else if (maxLength !== undefined && inputValue.length > maxLength) {
      setError(`Maximum length is ${maxLength} characters.`);
    } else {
      setError(''); 
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={4} 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" // Prevent resizing
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
