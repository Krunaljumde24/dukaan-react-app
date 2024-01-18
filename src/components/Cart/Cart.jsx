import React from 'react'
import './cart.css'
import CartCard from './CartCard/CartCard'
import CartPricing from './CartPricing/CartPricing'
import { Link } from 'react-router-dom'
function Cart() {


    return (
        <div className='container text-center section'>
            <CartPricing />
            {/* <div className="col-md-6 section cart-items">
               
            </div>
            <div className="col-md-6 section pricing">
              
            </div> */}
        </div>
    )
}

export default Cart