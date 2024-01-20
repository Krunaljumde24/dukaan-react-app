import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './cartPricing.css'
import { ProductContext } from '../../../context/ProductContext';

function CartPricing() {

    const { cartItemList } = useContext(ProductContext)

    let totalPrice = 0;

    cartItemList.map((prod) => {
        totalPrice += prod.totalPrice
    })

    return (

        <div className='cart-pricing'>
            <h4><u>Pricing</u></h4>
            {cartItemList.length != 0 ?
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Item</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItemList.map((product) => {
                            return (
                                <tr key={product.productId}>
                                    <th scope="row">{cartItemList.indexOf(product) + 1}</th>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.quantity} {product.quantityType}</td>
                                    <td>₹ {product.totalPrice}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">₹ {totalPrice}</th>
                        </tr>
                    </tfoot>
                </table>
                :
                <p>Cart Is Empty <Link to="/shop">Go To Shopping</Link>.</p>
            }
        </div>
    )
}

export default CartPricing