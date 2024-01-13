import React, { useContext } from 'react'

import groceryImg from '../../../public/grocery-img.png'
import './home.css'
import checkIcon from '../../../public/icons8-check-50.png'
import deliveryIcon from '../../../public/icons8-delivery-50.png'
import paymentIcon from '../../../public/icons8-payment-50.png'
function Home() {

    // const user = useContext(AuthContext);

    return (
        <>

            <div className='landing-page'>
                <div className="row">
                    <div className="home-left col-lg-5">
                        <h1>One place for all your groceries!</h1>
                        <button type='button' className='btn btn-lg btn-success my-4'>Shop Now</button>
                    </div>
                    <div className="home-right col">
                        <img src={groceryImg} className='grocery-img' alt="grovery_image" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="custom-card-container">
                    <div className="custom-card">
                        <img src={checkIcon} className='card-icon' alt="check_icon" />
                        <p>
                            <b>Money Guarantee</b>
                            <br />
                            7 Days Money Back
                        </p>
                    </div>

                    <div className="custom-card">
                        <img src={deliveryIcon} className='card-icon' alt="check_icon" />
                        <p>
                            <b>Fast Delivery</b>
                            <br />
                            Within 2-3 business hours
                        </p>
                    </div>

                    <div className="custom-card">
                        <img src={paymentIcon} className='card-icon' alt="check_icon" />
                        <p>
                            <b>Secure Payments</b>
                            <br />
                            All Cards/UPI/Net Banking
                        </p>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Home