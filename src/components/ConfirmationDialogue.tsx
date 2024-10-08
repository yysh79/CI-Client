import React, { useState, useRef, useEffect } from 'react';
import Delete from './delete';

const ConfirmationDialogue: React.FC = () => {
    const [showDiv, setShowDiv] = useState<boolean>(false);
    const dialogRef = useRef<HTMLDivElement>(null);

    const enter = () => setShowDiv(true);
    const leave = () => setShowDiv(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
                leave();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block">
            <i onClick={enter} className="material-icons text-gray-500 mx-2 cursor-pointer hover:text-gray-700">
                delete
            </i>
            {showDiv && (
                <div ref={dialogRef} className="absolute z-10 bg-white border border-gray-300 shadow-lg rounded-lg p-4 mt-2 w-64">
                    <p className="text-gray-800">אתה בטוח שברצונך למחוק את המשתמש ? </p>
                    <div className="mt-4 flex justify-end space-x-2">
                       <Delete/>
                        <button
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={leave}
                        >
                            לא
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ConfirmationDialogue