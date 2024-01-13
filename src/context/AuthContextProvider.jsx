import React, { useState } from 'react'
import AuthContext from './AuthContext'

function AuthContextProvider({ children }) {

    const [loggedInUser, setLoggedInUser] = useState()


    let login = (username, password) => {
        if (username === 'admin' && password === 'admin') {
            setLoggedInUser(username)
        }
    }

    let logout = () => {
        setLoggedInUser()
    }

    return (
        <AuthContext.Provider value={{ login, loggedInUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider