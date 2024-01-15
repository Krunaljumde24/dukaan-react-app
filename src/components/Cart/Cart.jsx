import React from 'react'
import './cart.css'
import CartCard from './CartCard/CartCard'
import { Link } from 'react-router-dom'
function Cart() {


    return (
        <div className='row '>
            <div className="col-md-8 section cart-items">
                <CartCard />
                <CartCard />
                <CartCard />
            </div>
            <div className="col-md-4 section pricing">

            </div>
        </div>
    )
}

export default Cart