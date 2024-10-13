import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom'; // ייבוא Link לצורך ניתוב

interface ServerResponse {
    isSuccessful: boolean;
    displayMessage: string;
    data?: any;
}

function OTPPage() {
    const [email, setEmail] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [otpRequested, setOtpRequested] = useState<boolean>(false);
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false); // מעקב אחרי הצלחת האימות

    // פונקציה לבקשת OTP
    const handleRequestOTP = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users/otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data: ServerResponse = await response.json();
            setMessage(data.displayMessage);

            if (data.isSuccessful) {
                setOtpRequested(true); // אם הצליח, מעבר לשלב הבא
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    // פונקציה לאימות ה-OTP
    const handleVerifyOTP = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),
            });

            const data: ServerResponse = await response.json();
            setMessage(data.displayMessage);
            setIsSuccessful(data.isSuccessful); // עדכון לפי תוצאת האימות
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">OTP Authentication</h2>

                {!otpRequested ? (
                    <form onSubmit={handleRequestOTP} className="space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                            Get OTP
                        </button>
                    </form>
                ) : !isSuccessful ? (
                    <form onSubmit={handleVerifyOTP} className="space-y-4">
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                            Verify OTP
                        </button>
                    </form>
                ) : (
                    <div className="text-center">
                        <p className="mb-4 text-green-600">OTP verified successfully!</p>
                        <Link to="/usersList">
                            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded-md hover:bg-green-600">
                                Go to Home
                            </button>
                        </Link>
                    </div>
                )}

                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}


export default OTPPage;
