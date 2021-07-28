import React, { useState } from 'react';

let log;

const user = JSON.parse(localStorage.getItem('userInfo'));

fetch('http://159.65.126.180/api/auth/me', {
    method: "POST",
    body: JSON.stringify(
        {
            access_token: user.token.access_token,
        }
    ),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(res => {
        if (res.status === 401) {
            log = false;
            localStorage.removeItem('userInfo');
        } else {
            log = true
        }
    })
    .catch(error => console.log(error))


export const UserContext = React.createContext({})

export const UserContextProvider = ({ children }) => {
    let [data, setData] = useState({
        isLoggedIn: log,
        user
    })
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


