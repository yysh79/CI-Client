import React, { useState, useEffect, useRef } from "react";

interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
  password: string; // Note: Handle passwords securely in real applications
}

interface EditButtonProps {
  user: User;
}

const EditButton: React.FC<EditButtonProps> = ({ user }) => {
  const [showDiv, setShowDiv] = useState<boolean>(false);
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
          className="absolute z-10 bg-white border border-gray-300 shadow-lg rounded-lg p-4 mt-2 w-72 transition-opacity duration-200" // Reduced width to 72
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
          <div className="space-y-4">
            {/** First Name Input */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="firstName">
                שם פרטי
              </label>
              <input
                type="text"
                id="firstName"
                defaultValue={user.firstName}
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
                defaultValue={user.lastName}
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
                defaultValue={user.phone}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/** Email Input */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                אימייל
              </label>
              <input
                type="text"
                id="email"
                defaultValue={user.email}
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
                defaultValue={user.role}
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
                defaultValue={user.password}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => {
                // Add your updated user logic here
                console.log("User updated:", user);
                leave();
              }}
            >
              עדכן
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={leave}
            >
              בטל
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditButton;
