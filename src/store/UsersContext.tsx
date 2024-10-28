import React, { createContext, useState, ReactNode } from 'react';

interface UsersState {
    currentUsers: string[];
    setCurrentUsers: (users: string[]) => void;
}

const initialUsersState: UsersState = {
    currentUsers: [],
    setCurrentUsers: () => {},
};

export const UserContext = createContext<UsersState>(initialUsersState);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [currentUsers, setCurrentUsers] = useState<string[]>([]);

    return (
        <UserContext.Provider value={{ currentUsers, setCurrentUsers }}>
            {children}
        </UserContext.Provider>
    );
};
