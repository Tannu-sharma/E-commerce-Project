import React from 'react';
import { useNavigate } from "react-router-dom";
import cartImg from './cartImg.jpg';
import './addToCartButton.css';
import { useSelector} from "react-redux";

const AddToCartButton = () => {
    let navigate = useNavigate();
    const products = useSelector((state) => state.cartProducts.productsInCart);
    // const totalProductsInCart = products.length();
    return (
        <div className='cartButton'>
            <button onClick={()=>navigate("/addToCartPage")} className="cartImg" ><img src={cartImg} alt="this is cart logo" /></button>
             {/* <label>{totalProductsInCart}</label>                     here i want to show no. of items in the cart */}
             <p className='totalNoOfProducts'>{products.length}</p>
        </div>
    )
}

export default AddToCartButton;
