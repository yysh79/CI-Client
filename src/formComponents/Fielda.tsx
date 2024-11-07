import React, { useState } from 'react';
import { FieldProps } from './interfaces';

const Fielda: React.FC<FieldProps> = ({ label, type,_id, name ,  formId}) => {
  const [labelText, setLabelText] = useState(label);
  const [isEditing, setIsEditing] = useState(false);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelText(e.target.value); // מעדכן את ערך התווית
  };

  const handleEditClick = () => {
    setIsEditing(true); // מפעיל מצב עריכה
  };

  const handleConfirm = () => {
    setIsEditing(false); // יוצא ממצב עריכה

    fetch(`http://localhost:3000/froms/updateForm/${formId}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemId: _id,  // מזהה השדה לעדכון
        updatedFieldData: { 
          label: labelText, 
          name: name 
        }
      }), // הכנת הנתון לעדכון
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.isSuccessful) {
          console.log('Updated successfully');
        } else {
          console.error('Failed to update:', response.displayMessage);
        }
      })
      .catch((err) => console.error('Error:', err));
  };


  return (
    <div className='bg-slate-400'>
      {isEditing ? (
        <div>
          <input
            className='border border-slate-600 mb-2 p-1 text-orange-300'
            value={labelText} // מציג את ערך התווית הנוכחי
            onChange={handleLabelChange}
            autoFocus // שם את הפוקוס על השדה מיד כשנכנסים למצב עריכה
          />
          <button onClick={handleConfirm} className='bg-green-500 text-white p-1'>
            אישור
          </button>
        </div>
      ) : (
        <div>
          <span>{labelText}</span>
          <button onClick={handleEditClick} className='bg-blue-500 text-white p-1 ml-2'>
            עריכה
          </button>
        </div>
      )}
    </div>
  );
};

export default Fielda;
