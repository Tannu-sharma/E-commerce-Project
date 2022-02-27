export const GET_PRODUCTS_DATA_IN_CART = "GET_PRODUCTS_DATA_IN_CART"; 
export const REMOVE_PRODUCT_DATA ="REMOVE_PRODUCT_DATA";
export const INCREASE_PRODUCT_DATA="INCREASE_PRODUCT_DATA";
export const DECREASE_PRODUCT_DATA="DECREASE_PRODUCT_DATA";

const getProductsDataInCart = (product) => (dispatch, getState) => {                                    
    product.quantity=1;
    const cartProducts= getState().cartProducts.productsInCart; 

    const isProduct = cartProducts.some((item)=>item.id===product.id);                                       //only one copy of product is created in cart 

    if(!isProduct){
      dispatch({ type: GET_PRODUCTS_DATA_IN_CART, payload: {product} });
    } 
    
};

export const removeProductsFromCart =(product)=>(dispatch)=>{
    dispatch({type:REMOVE_PRODUCT_DATA , payload:{product}})
  }

export const increaseProductQuantity = (productId, quantity) => (dispatch, getState) => {
  const products= getState().cartProducts.productsInCart;                //products contain all products in cart 
   const product= products.map((data, key)=>{
      if(data.id === productId){
        data.quantity=data.quantity+1;
      }
    return(data);
  })
  dispatch({type:INCREASE_PRODUCT_DATA, payload:{product}});
}


export const decreaseProductQuantity = (productId, quantity) => (dispatch, getState) => {
  const products= getState().cartProducts.productsInCart;                
   const product= products.map((data, key)=>{
      if(data.id === productId){
        data.quantity=data.quantity-1;
      }
    return(data);
  })
  dispatch({type:DECREASE_PRODUCT_DATA, payload:{product}});
}

export default getProductsDataInCart;
