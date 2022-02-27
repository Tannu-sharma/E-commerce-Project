import React, {useMemo} from 'react';
import './productDetailPage.css';
import { useParams } from 'react-router-dom';
import getProductsDataInCart from '../../../store/cartReducer/cartActions';
import { useSelector, useDispatch } from "react-redux";

const ProductDetailPage = () => {
    const { productId } = useParams();

    const products = useSelector((state) => state.products.productsListing);
    const dispatch = useDispatch();
    
    // const selectedProduct = products.filter(obj => {
    //     return obj.id === productId;
    //   })
    //   console.log("tannu"+selectedProduct);
    let selectedProduct= {};
    useMemo(() =>{
           for(let i=0;i<products.length;i++){
               if(products[i].id == productId)
               {
                selectedProduct=products[i];
               }
           }
    }, [products])

    return (
        <div className='productDetailConatiner'>
            <img src={selectedProduct.image} className='productDetailPhoto'/><br />
            <div className='productDetails'>
            <p className='productDetailCategory'>{selectedProduct.category}</p>
                <p className='productDetailTitle'>{selectedProduct.title}</p>
               <div className='Ratingsdiv'><p className='productDetailRating'>Ratings : &#x2B50;{selectedProduct.rating.rate}</p>
                <p className='productDetailPrice'>$ {selectedProduct.price}</p></div> 
                <p className='productDetailDescription'>{selectedProduct.description}</p>
                <button className='addToCartButtonDetailInProducts' onClick={()=> dispatch(getProductsDataInCart(selectedProduct))}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDetailPage;
