import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';
import Otp from './Otp'
import { logIn } from '../store/userSlice';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';


function Login() {


    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [googleEmail, setGoogleEmail] = useState(''); 

    const navigate = useNavigate();

    const handleSuccess = (credentialResponse: any) => {
        const credential = credentialResponse.credential;
        const decoded = jwtDecode(credential);
        console.log('Decoded JWT:', decoded);

        // After successful login, navigate to the desired page
        navigate('../');  // Adjust the path according to your app
    };
    
    const handleError = () => {
        console.log('Login Failed');
    };
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setError('');

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
                dispatch(logIn())
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
        <div className="flex justify-center items-center min-h-screen bg-[url('/images/background-login.jpg')] bg-cover bg-center">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-lg w-full">
                <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-6">התחברות</h1>

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
                        className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'} text-white py-3 px-4 rounded-md font-bold hover:bg-blue-700 transition duration-300 shadow-lg`}
                        disabled={loading}
                    >
                        {loading ? 'טוען...' : 'כניסה'}
                    </button>
                </form>

               
                   
                <p  className={`w-full  'bg-gray-400' : 'bg-blue-500'} text-white py-3 px-4 rounded-md font-bold hover:bg-blue-600 transition duration-300 shadow-md`}>
                       <Link to={"/otp"}>סיסמא במייל</Link>
                   </p>
               
                <p className="mt-6 text-center text-sm text-gray-600">
                    אין לך חשבון? <a href="#" className="text-blue-500 hover:underline">צור חשבון</a>
                </p>

                <div className="mt-8">
                    <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                    {googleEmail && (
                        <p className="mt-4 text-center text-sm text-gray-600">
                            אימייל של Google: <span className="font-bold">{googleEmail}</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

    




export default Login;
