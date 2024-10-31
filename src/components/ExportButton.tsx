import React from 'react';
import { RiFileExcel2Line } from "react-icons/ri";
const ExportButton: React.FC = () => {
    const handleExport = async () => {
        try {
            const response = await fetch('http://localhost:3000/users/exportToExcelAllUsers', {
                method: 'GET',headers: {'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',},});
            if (!response.ok) {throw new Error('Network response was not ok');}
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'users.xlsx'; 
            document.body.appendChild(a);
            a.click();
            a.remove(); 
        } catch (error) {console.error('Error exporting users:', error);}};
    return (
        <button onClick={handleExport}
         className=" bg-gray-500 flex text-white font-bold py-2 px-4 rounded hover:text-gray-300 items-center gap-5 transition duration-300"
         >ייצוא לאקסל<RiFileExcel2Line size={20} /></button>);};
export default ExportButton;
