import React from 'react';

const LogOut: React.FC = () => {
    const handleLogout = async () => {
        try {
            
            await fetch('http://localhost:3000/users/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, 
                    'Content-Type': 'application/json',
                },
            });

            
            localStorage.removeItem('token');

            window.location.href = '/login'; 
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <button
            onClick={handleLogout} 
            className="mt-4 bg-red-600 text-white font-semibold flex items-center justify-center px-4 py-2 rounded-md hover:bg-red-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
            <span className="material-icons mr-2">logout</span>
            להתנתק
        </button>
    );
}

export default LogOut;

