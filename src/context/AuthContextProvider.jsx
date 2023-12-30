import React, { useState } from 'react'
import AuthContext from './AuthContext'

function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username === 'admin' && password === 'admin') {
            setUser('admin');
        }
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;