import React, { useRef, useState, useEffect } from 'react';
import TextInput from '../components/questionnaires-components/TextInput'
import NumberInput from '../components/questionnaires-components/NumberInput'
import Textarea from '../components/questionnaires-components/Textarea'
import Button from '../components/questionnaires-components/Button'
import Checkbox from '../components/questionnaires-components/Checkbox'
import Radio from '../components/questionnaires-components/Radio'
import Select from '../components/questionnaires-components/Select'



const CreateQuestionnaire: React.FC = () => {

    const [showDiv, setShowDiv] = useState<Boolean>(false);
    const [array, setArray] = useState<JSX.Element[]>([]);
    const [inputString, setInputString] = useState<String>('')
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

                        {array.map((value, index) => (
                            <div key={index}>{value}</div>
                        ))}

                        <i aria-label='Add' className="material-icons text-gray-300 mx-2 cursor-pointer hover:text-gray-400 text-6xl"
                            onClick={enter}>
                            add
                        </i>
                        {showDiv && (<div ref={divRef} className='bg-gray-200 rounded-lg p-4 border border-gray-400 w-96 flex justify-center space-x-6'>
                            <i onClick={() => setArray([...array, <TextInput label='שם משתמש' />])}
                                aria-label='Text Fields'
                                className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>text_fields
                            </i>
                            <i onClick={() => setArray([...array, <NumberInput />])}
                                aria-label='Pin'
                                className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>pin
                            </i>
                            <i onClick={() => setArray([...array, <Textarea />])}
                                aria-label='Segment'
                                className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>segment
                            </i>
                            <i onClick={() => setArray([...array, <Button />])}
                                aria-label='Dialpad'
                                className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>dialpad
                            </i>
                            <i onClick={() => setArray([...array, <Checkbox />])}
                                aria-label='Check Box'
                                className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>check_box
                            </i>
                            <i onClick={() => setArray([...array, <Radio />])}
                                aria-label='Radio Button Checked'
                                className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>radio_button_checked
                            </i>
                            <i onClick={() => setArray([...array, <Select />])}
                                aria-label='List Alt'
                                className='material-icons  text-gray-500 mx-2 cursor-pointer hover:text-gray-400 text-2xl'>list_alt
                            </i>

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
