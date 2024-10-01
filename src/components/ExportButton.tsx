import React from 'react';

const ExportButton: React.FC = () => {
    const handleExport = async () => {
        try {
            const response = await fetch('http://localhost:3000/users/exportToExcelAllUsers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // קבלת הקובץ
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob); 

            // יצירת קישור להורדה
            const a = document.createElement('a');
            a.href = url;
            a.download = 'users.xlsx'; // שם הקובץ 
            document.body.appendChild(a);
            a.click(); // לחיצה על הקישור להורדה
            a.remove(); // הסרת הקישור מה-DOM

        } catch (error) {
            console.error('Error exporting users:', error);
        }
    };

    return (
        <button onClick={handleExport} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Export Users to Excel</button>
    );
};

export default ExportButton;
