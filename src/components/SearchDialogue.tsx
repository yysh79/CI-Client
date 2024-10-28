import React, { useState } from 'react';

const SearchDialogue: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(''); // State to store the input value

  const findUsers = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    try {
      const response = await fetch(`http://localhost:3000/users/search/${inputValue}`, {
        method: 'GET'
      });

      
    } catch (error) {
      console.error(error)
    }
  };



  return (
    <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={findUsers}
        className="border border-gray-400 p-3 rounded-lg w-full focus:outline-none focus:border-gray-600 transition duration-300 ease-in-out"
        placeholder="Enter search term"
      />
    </div>
  );
};

export default SearchDialogue;
