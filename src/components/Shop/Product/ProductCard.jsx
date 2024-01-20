import React, { useContext, useEffect } from 'react'
import './productCart.css'
import { useState } from 'react';
import toast from 'react-hot-toast'
import { ProductContext } from '../../../context/ProductContext';

function ProductCard(props) {

    const [item, setItem] = useState('-');
    let [selErr, setSelErr] = useState(false);

    const { addItemToCart } = useContext(ProductContext);

    let handleAddBtn = (event, props) => {
        if (item == '-') {
            setSelErr(true);
        } else {
            setSelErr(false);
            let price = props.productDiscountedPrice;
            let quantity = item / 1000;
            let totalPrice = quantity * price;

            let productDetails = {
                id: props.productId,
                name: props.productName,
                quantity: quantity,
                quantityType: props.productQuantityType,
                pricePerKiloGram: props.productDiscountedPrice,
                totalPrice: totalPrice
            }
            addItemToCart(productDetails);
            toast.success('Product Added!')
            setRemoveBtn(true)
            setItem('-')
            console.log(productDetails);
        }
    }

    let handleSelectChange = (event) => {
        setItem(event.target.value)
        setSelErr(false);
    }

    let handleRemoveBtnClick = () => {
        removeProductFromListById(props.productId)
        toast.error('Product Removed!');
        setRemoveBtn(false)
    }

    const [removeBtn, setRemoveBtn] = useState(false);
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
                        <option value="0">-</option>
                        <option value="250">250gm</option>
                        <option value="500">500gm</option>
                        <option value="750">750gm</option>
                        <option value="1000">1Kg</option>
                        <option value="2000">2Kg</option>
                        <option value="5000">5Kg</option>
                    </select>
                    {selErr ? <p className='selectError'>*please select the quantity</p> : ''}
                </div>
                <div className="card-footer">
                    <button type='button'
                        onClick={(event) => { handleAddBtn(event, props) }}
                        className='btn btn-sm add-to-cart-btn'>Add
                    </button>
                    {
                        removeBtn &&
                        <button type='button'
                            className='btn btn-sm btn-danger mx-3 remove-from-cart-btn'
                            onClick={handleRemoveBtnClick}
                        >
                            Remove
                        </button>
                    }

                </div>
            </div>
        </div >
    )
}

export default ProductCard