import React, { useState } from 'react';

interface UserFormProps {
  onSubmit: (data: any) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    phone: '',
    password: '',
    city: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    phone: '',
    city: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { firstName: '', lastName: '', idNumber: '', phone: '', city: '' };

    // ולידציה של שם פרטי
    if (!/^[a-zA-Z\u0590-\u05FF]+$/.test(formData.firstName) || formData.firstName.length < 2) {
      newErrors.firstName = 'יש להזין אותיות בלבד ומינימום 2 תווים';
      isValid = false;
    }

    // ולידציה של שם משפחה
    if (!/^[a-zA-Z\u0590-\u05FF]+$/.test(formData.lastName) || formData.lastName.length < 2) {
      newErrors.lastName = 'יש להזין אותיות בלבד ומינימום 2 תווים';
      isValid = false;
    }

    // ולידציה של ת"ז
    if (!/^\d{9}$/.test(formData.idNumber)) {
      newErrors.idNumber = 'תעודת זהות לא תקינה';
      isValid = false;
    }

    // ולידציה של טלפון נייד
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'יש להזין ספרות בלבד (10 ספרות)';
      isValid = false;
    }

    // ולידציה של עיר
    if (formData.city === '') {
      newErrors.city = 'יש לבחור עיר';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setIsModalOpen(false); // סגירת המודאל לאחר שליחת הטופס
    }
  };

  return (
    <div>
      {/* כפתור לפתיחת המודאל */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        הוסף משתמש
      </button>

      {/* מודאל */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full relative">
            <button
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">שם פרטי</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`mt-1 block w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  placeholder="הכנס שם פרטי"
                  required
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">{errors.firstName} <i className="fas fa-exclamation-circle"></i></span>
                )}
              </div>

              {/* שדה שם משפחה */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">שם משפחה</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`mt-1 block w-full p-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  placeholder="הכנס שם משפחה"
                  required
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">{errors.lastName} <i className="fas fa-exclamation-circle"></i></span>
                )}
              </div>

              {/* שדה ת"ז */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">תעודת זהות</label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  className={`mt-1 block w-full p-2 border ${errors.idNumber ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  placeholder="הכנס תעודת זהות"
                  required
                />
                {errors.idNumber && (
                  <span className="text-red-500 text-sm">{errors.idNumber} <i className="fas fa-exclamation-circle"></i></span>
                )}
              </div>

              {/* שדה טלפון */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">טלפון נייד</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  placeholder="הכנס מספר טלפון"
                  required
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone} <i className="fas fa-exclamation-circle"></i></span>
                )}
              </div>

              {/* שדה סיסמא */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">סיסמא</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="הכנס סיסמא"
                />
              </div>

              {/* בחירת עיר */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">עיר</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`mt-1 block w-full p-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  required
                >
                  <option value="">בחר עיר</option>
                  <option value="Tel Aviv">תל אביב</option>
                  <option value="Jerusalem">ירושלים</option>
                  <option value="Haifa">חיפה</option>
                  <option value="Rishon LeZion">ראשון לציון</option>
                  <option value="Beer Sheva">באר שבע</option>
                </select>
                {errors.city && (
                  <span className="text-red-500 text-sm">{errors.city} <i className="fas fa-exclamation-circle"></i></span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                הוסף משתמש
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
