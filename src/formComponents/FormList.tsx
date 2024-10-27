import React from 'react';
import FormItem from './FormItem'; // יבוא רכיב FormItem
import { FormListProps } from './interfaces'; // יבוא הממשקים

const FormList: React.FC<FormListProps> = ({ forms }) => {
    return (
      <div  >
        {forms.map((form) => (
          <FormItem key={form._id} form={form} /> 
        ))}
      </div>
    );
  };
  

export default FormList;
