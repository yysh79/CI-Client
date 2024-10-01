import React, { useState, useEffect } from 'react';

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: string;
    password: string;
}

const UsersList: React.FC = () => {
    const [dataBase, setDataBase] = useState<User[]>([]); 

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/users/getAllUsers');
            const users: User[] = await response.json(); 
            setDataBase(users);
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-xl font-bold mb-4">נתוני משתמשים</h1>
            <table className="w-full border-collapse text-right">
                <thead>
                    <tr>
                        <th className="border border-gray-300 bg-gray-200 font-bold text-right">שם</th>
                        <th className="border border-gray-300 bg-gray-200 font-bold text-right">שם משפחה</th>
                        <th className="border border-gray-300 bg-gray-200 font-bold text-right">טלפון נייד</th>
                        <th className="border border-gray-300 bg-gray-200 font-bold text-right">דואר אלקטרוני</th>
                        <th className="border border-gray-300 bg-gray-200 font-bold text-right">תפקיד</th>
                        <th className="border border-gray-300 bg-gray-200 font-bold text-right">סיסמה</th>
                        <th className="border border-gray-300">פעולות</th>
                    </tr>
                </thead>
                <tbody>
                    {dataBase.map((user) => (
                        <tr key={user._id} className="hover:bg-gray-300">
                            <td className="border border-gray-300 bg-white p-2 text-right">{user.firstName}</td>
                            <td className="border border-gray-300 bg-white p-2 text-right">{user.lastName}</td>
                            <td className="border border-gray-300 bg-white p-2 text-right">{user.phone}</td>
                            <td className="border border-gray-300 bg-white p-2 text-right">{user.email}</td>
                            <td className="border border-gray-300 bg-white p-2 text-right">{user.role}</td>
                            <td className="border border-gray-300 bg-white p-2 text-right">******</td>
                            <td className="border border-gray-300 bg-white p-2 text-center">
                                <i className="material-icons text-gray-500 mx-2 cursor-pointer hover:text-gray-700">
                                    delete
                                </i>
                                <i className="material-icons text-gray-500 mx-2 cursor-pointer  hover:text-gray-700">
                                    edit
                                </i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UsersList;
