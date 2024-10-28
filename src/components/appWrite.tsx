import { Client, Account } from 'appwrite';
import React from 'react';

const client = new Client();
client
    .setEndpoint("http://localhost/v1")  
    .setProject("670b7e61000efb2f0b9a"); 

const account = new Account(client);

const App: React.FC = () => {
    return (
        <div>
            <h1>Appwrite Login Example</h1>
        </div>
    );
};

export { account, client };
export default App;
