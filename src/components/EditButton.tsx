import React, { useState, useEffect, useRef } from "react";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
  password: string; // Note: Handle passwords securely in real applications
}

interface EditButtonProps {
  user: User;
  updateUser: (updatedUser: User) => void;
  updateUserInDB: (updatedUser: User) => void;
}

const EditButton: React.FC<EditButtonProps> = ({ user ,updateUser ,updateUserInDB }) => {
  const [showDiv, setShowDiv] = useState<boolean>(false);
  const [editedUser, setEditedUser] = useState<User>({ ...user });
  const dialogRef = useRef<HTMLDivElement>(null);

  const enter = () => setShowDiv(true);
  const leave = () => setShowDiv(false);

  // Close the dialog when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        leave();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof User
  ) => {
    setEditedUser({
      ...editedUser,
      [field]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Updated user:", editedUser);
    updateUser(editedUser);
    await updateUserInDB(editedUser); 
    // Here, you would typically update the user via an API or save it to state
    leave(); // Close the dialog after submission
  };

  return (
    <div className="relative">
      <i
        onClick={enter}
        className="material-icons text-gray-500 mx-2 cursor-pointer hover:text-gray-700"
        role="button"
        aria-label="Edit"
      >
        edit
      </i>

      {showDiv && (
        <div
          ref={dialogRef}
          className="absolute z-10 bg-white border border-gray-300 shadow-lg rounded-lg p-4 mt-2 w-72 transition-opacity duration-200"
          role="dialog"
          aria-labelledby="dialog-title"
          aria-modal="true"
        >
          <h3
            id="dialog-title"
            className="text-lg font-semibold mb-4 text-gray-800"
          >
            עדכון מידע משתמש
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/** First Name Input */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="firstName">
                שם פרטי
              </label>
              <input
                type="text"
                id="firstName"
                value={editedUser.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/** Last Name Input */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="lastName">
                שם משפחה
              </label>
              <input
                type="text"
                id="lastName"
                value={editedUser.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/** Phone Input */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="phone">
                טלפון
              </label>
              <input
                type="text"
                id="phone"
                value={editedUser.phone}
                onChange={(e) => handleInputChange(e, "phone")}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/** Email Input */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                אימייל
              </label>
              <input
                type="email"
                id="email"
                value={editedUser.email}
                onChange={(e) => handleInputChange(e, "email")}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/** Role Input */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="role">
                תפקיד
              </label>
              <input
                type="text"
                id="role"
                value={editedUser.role}
                onChange={(e) => handleInputChange(e, "role")}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/** Password Input */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">
                סיסמה
              </label>
              <input
                type="password"
                id="password"
                value={editedUser.password}
                onChange={(e) => handleInputChange(e, "password")}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-6 flex justify-end space-x-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                עדכן
              </button>
              <button
                type="button"
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={leave}
              >
                בטל
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditButton;
