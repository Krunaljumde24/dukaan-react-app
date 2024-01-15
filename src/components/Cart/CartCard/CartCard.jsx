import React from 'react'
import './cartCard.css'

import vegetables from '../../Shop/Product/Vegetables';

function CartCard() {

  const commonImgPath = '/src/assets/Vegetables/';
  let vege = vegetables[0];
  return (
    <div className='cart-card-container'>
      <div className="cart-card">
        <div className="product-img">
          <img src={commonImgPath + vege.productImageName} alt="product_cart_img" />
        </div>
        <div className="product-desc">
          <h4>{vege.productName}</h4>
          <p>
            <b>
              ₹ {vege.productDiscountedPrice}
            </b>

          </p>
          <div className="quantity">
            Quantity<br />
            <button type='button' className='minus'>
              -
            </button>
            <input type="number" className='countInput' />
            <button type='button' className='plus'>
              +
            </button>
          </div>
          <button type='button' className='btn btn-sm move-btn my-2'>Move to whishlist</button>
          <button type='button' className='btn btn-sm remove-btn my-2'>Remove from cart</button>
        </div>
      </div>


    </div>
  )
}

export default CartCard