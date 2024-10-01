

import React from 'react';
import UserForm from './components/UserForm';

const App: React.FC = () => {
  const handleFormSubmit = (data: any) => {
    console.log('User Data:', data);
    // כאן תוכל לשלב את הלוגיקה שלך לשליחת הנתונים לשרת או כל פעולה אחרת
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <UserForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
