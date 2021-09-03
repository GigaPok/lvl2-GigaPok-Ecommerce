import React, { useState } from 'react';

export const UserContext = React.createContext({})

const user = JSON.parse(localStorage.getItem('userInfo'));

export const UserContextProvider = ({ children }) => {
    const [data, setData] = useState({
        isLoggedIn: !!user,
        user,
        cart: []
    });

    return (
        <UserContext.Provider value={
            {
                data,
                setData
            }
        }>
            {children}
        </UserContext.Provider>
    );
};


