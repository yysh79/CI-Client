import React from 'react';
import Fielda from './Fielda';
import {  FormItemProps } from './interfaces';


const FormItem: React.FC<FormItemProps> = ({ form }) => {
    return (
<div className="p-6 border-b border-blue-500 bg-blue-100 rounded-lg shadow-lg">
  <h2 className="text-2xl font-semibold text-blue-900 mb-4">{form.title}</h2>
  <div className="space-y-4">
    {form.fields.map((field, index) => (
      <Fielda key={index} {...field}  formId={form._id} />
    ))}
  </div>
</div>


    );
  };
  

export default FormItem;
