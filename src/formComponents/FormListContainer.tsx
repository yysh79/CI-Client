import React, { useState, useEffect } from 'react';
import FormList from './FormList';
import { FormDocument} from './interfaces';



const FormListContainer: React.FC = () => {
  const [forms, setForms] = useState<FormDocument[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/froms/getAllForms')
      .then((res) => res.json())
      .then((response) => {
        if (response.isSuccessful) {
          console.log(response.data); // וודא שמתקבל מערך של טפסים
          setForms(response.data);    // כאן ניגשים ל-data ולא לתשובה כולה
        } else {
          console.error('Failed to fetch forms');
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
<div className="p-6 bg-blue-500 text-white shadow-md rounded-t-lg">
  <h1 className="text-3xl font-bold mb-4">טפסים</h1>
  
  <FormList forms={forms} /> {/* מעביר את forms כפרופס */}
</div>
  );
};

export default FormListContainer;
