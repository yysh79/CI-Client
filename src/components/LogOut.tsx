import React from 'react';

const LogOut: React.FC = () => {
    const handleLogout = () => {
        
        localStorage.removeItem('token');

        window.location.href = '/login';
    };

    return (
        <button className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-300">
            <span className="material-icons text-gray-500" style={{ fontSize: '30px' }}>logout</span>
            <div className="text-gray-700 font-semibold text-lg">להתנתק</div>
        </button>
    );
}

export default LogOut;
