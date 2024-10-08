import React, { useState, useEffect } from 'react';

import ConfirmationDialogue from './ConfirmationDialogue';
import EditButton from './EditButton';

import ExportButton from './ExportButton';
import UserForm from './UserForm';





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
        <div className="flex p-5">
        <ExportButton />
        </div>
           
            <div className="p-5 pt-0">
                <table className="w-full border-collapse text-right ">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">פעולות</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">סיסמה</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">תפקיד</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">דואר אלקטרוני</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">טלפון נייד</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">שם משפחה</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">שם</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataBase.map((user) => (
                            <tr key={user._id} className={`  'bg-white'}`}>
                                <td className="border border-gray-300 p-2 text-center">
                                    <div className="flex justify-center space-x-2">
                                    <ConfirmationDialogue />  
                                    <EditButton user={user} /> 
                                
                                    </div>
                                </td>
                                <td className="border border-gray-300 p-2 text-right">******</td>
                                <td className="border border-gray-300 p-2 text-right">{user.role}</td>
                                <td className="border border-gray-300 p-2 text-right">{user.email}</td>
                                <td className="border border-gray-300 p-2 text-right">{user.phone}</td>
                                <td className="border border-gray-300 p-2 text-right">{user.lastName}</td>
                                <td className="border border-gray-300 p-2 text-right">{user.firstName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default UsersList;
