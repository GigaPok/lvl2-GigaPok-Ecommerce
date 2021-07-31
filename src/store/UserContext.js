import React, { useState } from 'react';

let log;

const user = JSON.parse(localStorage.getItem('userInfo'));

if ((user)) {

    fetch('http://159.65.126.180/api/auth/me', {
        method: "POST",
        body: JSON.stringify(
            {
                access_token: user.token.access_token,
            }
        ),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token.access_token}`
        }
    })
        .then(res => {
            if (res.status === 401) {
                log = false;
                localStorage.removeItem('userInfo');
                console.log('Error')

            } else {
                log = true
                console.log(' Succces')
            }
        })
        .catch(error => console.log(error))
}

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


