import React, { useEffect } from 'react'
interface ConfirmationDialogueProps {
    userId: string;
    leave: () => void;
}

const Delete: React.FC<ConfirmationDialogueProps> = ({ userId, leave }) => {

    const deleteUser = async () => {
        try {
           const response = await fetch(`http://localhost:3000/users/deleteUser/${userId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                leave();
                window.location.reload(); 
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <>
            <button onClick={deleteUser} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                כן
            </button>
        </>
    )
}

export default Delete
