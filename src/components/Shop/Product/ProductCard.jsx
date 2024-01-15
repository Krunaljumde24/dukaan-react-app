import React from 'react'
import './productCart.css'
import { useState } from 'react';

function ProductCard(props) {

    const [item, setItem] = useState(250);
    
    let handleAddBtn = (event, props) => {
        let price = props.productDiscountedPrice;
        let quantity = item / 1000;
        let totalPrice = quantity * price;

        let productDetails = {
            name: props.productName,
            quantity: quantity,
            quantityType: props.productQuantityType,
            pricePerKiloGram: props.productDiscountedPrice,
            totalPrice: totalPrice
        }
        console.log(productDetails);

    }

    let handleSelectChange = (event) => {
        setItem(event.target.value)
    }

    return (
        <div className='product-cart'>
            <div className="card">
                <img src={props.productImageUrl} className="card-img-top product-card-img" alt="product_image" />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.productName}
                    </h5>
                    <p className="card-text">
                        ₹{props.productDiscountedPrice}/{props.productQuantityType} <small>₹{props.productActualPrice}/{props.productQuantityType} </small>
                    </p>
                </div>
                <div className="card-body">
                    <label htmlFor="lang">Qty</label> <br />
                    <select
                        name="languages"
                        id="lang"
                        onChange={(event) =>
                            handleSelectChange(event)}
                        required
                        value={item}
                    >
                        <option value="250">250gm</option>
                        <option value="500">500gm</option>
                        <option value="750">750gm</option>
                        <option value="1000">1Kg</option>
                        <option value="2000">2Kg</option>
                        <option value="5000">5Kg</option>
                    </select>
                </div>
                <div className="card-footer">
                    <button type='button'
                        onClick={(event) => { handleAddBtn(event, props) }}
                        className='btn btn-sm add-to-cart-btn'>Add</button>
                </div>
            </div>
        </div >
    )
}

export default ProductCard