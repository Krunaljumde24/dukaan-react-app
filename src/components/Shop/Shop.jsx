import React, { useContext, useEffect } from 'react'
import './shop.css'
import AuthContext from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

function Shop() {

    const { loggedInUser } = useContext(AuthContext)

    return (
        <div id='shop'>
            {!loggedInUser && <Navigate to="/login" replace={true} />}
            Shop</div>
    )
}

export default Shop