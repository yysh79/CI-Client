import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import Otp from './Otp'

function Login() {

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');


        try {
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                setSuccessMessage('! התחברות בהצלחה');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
       };
    return (
        <div className='flex justify-center items-center min-h-screen bg-[url("/images/background-login.jpg")] bg-cover bg-center'>
            <div className="bg-gray-200 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">התחברות</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right">אימייל</label>
                        <input 
                            type="email"  
                            placeholder="הכנס את האימייל שלך" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-right" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-right">סיסמא</label>
                        <input 
                            type="password" 
                            placeholder="הכנס את הסיסמא שלך" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-right"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}
                    <button 
                        type="submit" 
                        className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white py-3 px-4 rounded-md font-bold hover:bg-blue-600 transition duration-300 shadow-md`}
                        disabled={loading}
                        >
                        כניסה
                    </button>
                </form>
                   
                   <button ><p  className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white py-3 px-4 rounded-md font-bold hover:bg-blue-600 transition duration-300 shadow-md`}>
                       <Link to={"/otp"}>סיסמא במייל</Link>
                   </p>
                </button>
                <p className="mt-6 text-center text-sm text-gray-600">
                    אין לך חשבון? <a href="#" className="text-blue-500 hover:underline">צור חשבון</a>
                </p>
            </div>
        </div>
    )

  }

export default Login


