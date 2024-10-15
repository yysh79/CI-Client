import React, { useRef, useState, useEffect } from 'react';

const CreateQuestionnaire: React.FC = () => {

    const [showDiv, setShowDiv] = useState<Boolean>(false);
    const divRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {
            setShowDiv(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    const enter = () => setShowDiv(true);

    return (
        <div className="flex items-start justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg  mt-16 border border-gray-800" style={{ width: '600px', height: '600px' }}>
                <form action="" className='flex flex-col h-full overflow-y-auto'>
                    <div className='flex-1 flex flex-col items-center space-y-4 pb-4'>
                        <input type="text" className='w-full border border-gray-600 rounded-lg p-2' placeholder="שאלה 1" />
                        <input type="text" className='w-full border border-gray-600 rounded-lg p-2' placeholder="שאלה 2" />
                        <input type="text" className='w-full border border-gray-600 rounded-lg p-2' placeholder="שאלה 3" />
                        <input type="text" className='w-full border border-gray-600 rounded-lg p-2' placeholder="שאלה 4" />
                        <input type="text" className='w-full border border-gray-600 rounded-lg p-2' placeholder="שאלה 5" />
                        <input type="text" className='w-full border border-gray-600 rounded-lg p-2' placeholder="שאלה 6" />
                        <i aria-label='Add' className="material-icons text-gray-300 mx-2 cursor-pointer hover:text-gray-400 text-6xl"
                            onClick={enter}>
                            add
                        </i>
                        {showDiv && (<div ref={divRef} className='bg-gray-200 rounded-lg p-4 border border-gray-400 w-96 flex justify-center space-x-6'>
                            <i aria-label='Text Fields' className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>text_fields</i>
                            <i aria-label='Pin' className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>pin</i>
                            <i aria-label='Segment' className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>segment</i>
                            <i aria-label='Dialpad' className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>dialpad</i>
                            <i aria-label='Check Box' className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>check_box</i>
                            <i aria-label='Radio Button Checked' className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>radio_button_checked</i>
                            <i aria-label='List Alt' className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>list_alt</i>

                        </div>)}
                    </div>
                    <button type="submit" className="w-40 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg
                     hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 self-center mb-2">
                        שלח
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateQuestionnaire;
