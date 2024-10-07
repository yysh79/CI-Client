import React, { useState } from 'react'

const ConfirmationDialogue: React.FC = () => {
    const [showDiv, setShowDiv] = useState<boolean>(false);

    const enter = () => setShowDiv(true);
    const leave= () => setShowDiv(false);


    return (
        <div className="relative inline-block">
            <i onClick={enter} className="material-icons text-gray-500 mx-2 cursor-pointer hover:text-gray-700">
                delete
            </i>
            {showDiv && (
                <div className="absolute z-10 bg-white border border-gray-300 shadow-lg rounded-lg p-4 mt-2 w-64">
                    <p className="text-gray-800">אתה בטוח שברצונך למחוק את המשתמש ? </p>
                    <div className="mt-4 flex justify-end space-x-2">
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                            כן
                        </button>
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