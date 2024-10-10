import React from 'react'

function LogIn() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-[url("/images/background-login.jpg")] bg-cover bg-center'>
            <div className="bg-gray-200 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">התחברות</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right">אימייל</label>
                        <input 
                            type="email"  
                            placeholder="הכנס את האימייל שלך" 
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-right" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-right">סיסמא</label>
                        <input 
                            type="password" 
                            placeholder="הכנס את הסיסמא שלך" 
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-right"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-3 px-4 rounded-md font-bold hover:bg-blue-600 transition duration-300 shadow-md">
                        כניסה
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    אין לך חשבון? <a href="#" className="text-blue-500 hover:underline">צור חשבון</a>
                </p>
            </div>
        </div>
    )
}

export default LogIn

