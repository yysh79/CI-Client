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
    const [searchValue, setSearchValue] = useState<string>('');


    const fetchData = async (searchQuery: string = '') => {
        try {
            const endpoint = searchQuery 
                ? `http://localhost:3000/users/search/${searchQuery}` 
                : 'http://localhost:3000/users/getAllUsers';

            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const result = await response.json();
            if (result.isSuccessful && Array.isArray(result.data)) {
                setDataBase(result.data);
            } else {
                console.error('Unexpected response format:', result);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    useEffect(() => {
        fetchData(); 
    }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        fetchData(value); // Fetch users based on search input
    };
   
    const updateUser = (updatedUser: User) => {
        setDataBase((prevUsers) =>
            prevUsers.map((user) => (user._id === updatedUser._id ? updatedUser : user))
        );
    };
      
   

    const updateUserInDB = async (updatedUser: User) => {
        try {
            const response = await fetch(`http://localhost:3000/users/updateUser/${updatedUser._id}`, {
                method: 'PUT', // או PATCH אם אתה מעדיף
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });
    
            if (!response.ok) {
                throw new Error('Failed to update user');
            }
    
            const updatedUserResponse = await response.json();
            // עדכן את הרשימה עם המשתמש המעודכן
            updateUser(updatedUserResponse);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleSubmit = async (newUser: User) => {
        try {
            const response = await fetch('http://localhost:3000/users/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('Failed to add user');
            }

            const addedUser = await response.json();
            setDataBase((prevUsers) => [...prevUsers, addedUser]);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };
    

    return (
        <>
            <div className="flex gap-10 p-5">
                <UserForm onSubmit={handleSubmit}/>
                <ExportButton />
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="border border-gray-400 p-2 rounded-lg"
                    placeholder="Search users..."
                />
            </div>

            <div className="p-5 pt-0">
                <table className="w-full border-collapse text-right">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">פעולות</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">סיסמא</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">תפקיד</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">דוא"ל</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">טלפון</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">שם משפחה</th>
                            <th className="border border-gray-300 bg-gray-200 font-bold text-right p-2">שם פרטי</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataBase.map((user) => (
                            <tr key={user._id} className="bg-white">
                                <td className="border border-gray-300 p-2 text-center">
                                    <div className="flex justify-center space-x-2">
                                        <ConfirmationDialogue userId={user._id}/>
                                        <EditButton user={user} updateUser={updateUser} updateUserInDB={updateUserInDB} />
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