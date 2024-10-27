import React from 'react';
import { FieldProps } from './interfaces';



const Fielda: React.FC<FieldProps> = ({ label, type, name }) => (
  <div className='bg-red-500'>
    <label htmlFor={name}>{label}</label>
    <input className='border border-purple-500' id={name} name={name} type={type} />
    {/* ניתן להוסיף כאן טיפול בשגיאות אם יש צורך */}
  </div>
);

export default Fielda;
