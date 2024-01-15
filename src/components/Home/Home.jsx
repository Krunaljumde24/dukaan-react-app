import React, { useContext } from 'react'

import groceryImg from '../../assets/grocery-img.png'
import './home.css'
function Home() {

    // const user = useContext(AuthContext);

    return (
        <div className='landing-page'>
            <div className="row">
                <div className="home-left col-lg-5">
                    <h1>One place for all your groceries!</h1>
                    <button type='button' className='btn btn-lg btn-success my-4'>Shop Now</button>
                </div>
                <div className="home-right col">
                    <img src={groceryImg} alt="grovery_image" />
                </div>
            </div>
        </div>
    )
}

export default Home