// interfaces.ts

export interface Field {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: string[];
    required?: boolean;
    value?: any;
}
  
export interface FormField {
    name: string;
    label: string;
    type: string;
}
  
export interface FormDocument {
    _id: string;
    title: string;
    description?: string;
    city?: string;
    fields: Field[]; // ניתן גם להשתמש ב-FormField אם יש שדות שונים
    createdAt: Date;
  }
  
  export interface FormItemProps {
    form: FormDocument;
  }
  export interface FormListProps {
    forms: FormDocument[]; // רשימה של טפסים
  }
  export interface FieldProps {
    name: string;
    label: string;
    type: string;
  }
  