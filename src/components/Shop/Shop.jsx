import React, { useContext, useEffect } from 'react'
import './shop.css'
import AuthContext from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import ProductCard from './Product/ProductCard'
import vegetables from './Product/Vegetables.js'
import { ProductContext } from '../../context/ProductContext.jsx'

function Shop() {

    const { loggedInUser } = useContext(AuthContext)

    const commonImgPath = '/src/assets/Vegetables/';

    const { searchText } = useContext(ProductContext)

    const filteredVegetables = vegetables.filter((vege) => {
        return vege.productName.toLowerCase().includes(searchText.toLowerCase());
    })

    return (
        <>
            {!loggedInUser && <Navigate to="/login" replace={true} />}

            <div className="row">
                <div className="col-2 shop-sidebar">
                    Sidebar
                </div>
                <div className="col">
                    <p className='my-2'>Showing {filteredVegetables.length} of {vegetables.length} Vegetables</p>
                    <div id='shop' className='row'>
                        {filteredVegetables.map((veg) =>
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