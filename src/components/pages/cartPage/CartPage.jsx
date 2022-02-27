import React, { useState, useEffect } from 'react';
import './cartPage.css';
import { useSelector, useDispatch } from "react-redux";
import { removeProductsFromCart, increaseProductQuantity, decreaseProductQuantity} from '../../../store/cartReducer/cartActions';


const CartPage = () => {

    const productsInCart = useSelector((state) => state.cartProducts.productsInCart);
    let totalPrice=0;
    const dispatch = useDispatch();
    
    return (
        <React.Fragment>
            <div className='productsContainerInCart'>
                {
                    productsInCart.map((data, key) => {
                       
                        totalPrice = Number((totalPrice+(data.price * data.quantity)).toFixed(2));
                        
                        return (
                            <div className='productInCart' key={key}>
                                <span className='productSerialNoInCart'>{key + 1}.</span>
                                <button className='removeItemsButton' onClick={() => { dispatch(removeProductsFromCart(productsInCart[key])) }}>Remove Item</button>
                                <span className='productTitleInCart'>{data.title}</span><br />
                                <span className='productCategoryInCart'>{data.category}</span><br />
                                <div>
                                    {/* <span className='productRatingsInCart'>Rating : {data.rating.rate} &#x2B50;</span><br /> */}
                                    <span className='productRatingsInCart'>Rating : {data.rate} &#x2B50;</span><br />
                                    <span className='productPriceInCart'>Price : $ {data.price}</span>
                                    <span className='quantity'>
                                        <button className='increaseQuantity' onClick={() => dispatch(increaseProductQuantity(data.id, data.quantity))}>+</button>
                                        <span>Quantity: {data.quantity}</span>
                                        <button className='decreaseQuantity' onClick={() => (data.quantity>1)?(dispatch(decreaseProductQuantity(data.id, data.quantity))):null} >-</button>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='payPriceDiv'>
                    <span className='totalPrice'>Total Amount :  $ {totalPrice}</span>
                    <button className='payNowButton'>Pay Now</button>
                </div>

            </div>
        </React.Fragment>
    );
}

export default CartPage;
