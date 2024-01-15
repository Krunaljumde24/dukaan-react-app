import React, { useContext, useEffect } from 'react'
import './shop.css'
import AuthContext from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import ProductCard from './Product/ProductCard'
import Sidebar from '../Sidebar/Sidebar.jsx'
import vegetables from './Product/Vegetables.js'

function Shop() {

    const { loggedInUser } = useContext(AuthContext)

    const commonImgPath = '/src/assets/Vegetables/';

    return (
        <>
            {/* {!loggedInUser && <Navigate to="/login" replace={true} />} */}

            <div id='shop' className='row'>

                {vegetables.map((veg) =>
                    <ProductCard
                        className='col'
                        key={veg.productId}
                        productName={veg.productName}
                        productImageUrl={commonImgPath + veg.productImageName}
                        productActualPrice={veg.productActualPrice}
                        productDiscountedPrice={veg.productDiscountedPrice}
                        productQuantityType={veg.productQuantityType}
                    />
                )}
            </div>
        </>

    )
}

export default Shop