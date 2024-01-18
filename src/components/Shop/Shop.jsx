import React, { useContext, useEffect } from 'react'
import './shop.css'
import AuthContext from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import ProductCard from './Product/ProductCard'
import Sidebar from '../Sidebar/Sidebar.jsx'
import vegetables from './Product/Vegetables.js'
import { ProductContext } from '../../context/ProductContext.jsx'

function Shop() {

    const { loggedInUser } = useContext(AuthContext)

    const commonImgPath = '/src/assets/Vegetables/';

    const { productDetailsList } = useContext(ProductContext);

    return (
        <>
            {/* {!loggedInUser && <Navigate to="/login" replace={true} />} */}

            <div className="row">
                <div className="col-2 shop-sidebar">
                    1
                </div>
                <div className="col">
                    <div id='shop' className='row'>
                        {vegetables.map((veg) =>
                            <ProductCard
                                className='col'
                                key={veg.productId}
                                productId={veg.productId}
                                productName={veg.productName}
                                productImageUrl={commonImgPath + veg.productImageName}
                                productActualPrice={veg.productActualPrice}
                                productDiscountedPrice={veg.productDiscountedPrice}
                                productQuantityType={veg.productQuantityType}
                            />
                        )}
                    </div>
                </div>
            </div>

        </>

    )
}

export default Shop