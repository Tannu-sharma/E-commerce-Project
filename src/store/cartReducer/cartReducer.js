import { GET_PRODUCTS_DATA_IN_CART, REMOVE_PRODUCT_DATA, INCREASE_PRODUCT_DATA, DECREASE_PRODUCT_DATA} from "./cartActions";

const cartReducerInitialStates = {
  productsInCart: [],
}

const cartReducer = (state = cartReducerInitialStates, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA_IN_CART:
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload.product],
      }
    case REMOVE_PRODUCT_DATA:
        return{
            ...state,
            productsInCart: [...state.productsInCart.filter(item => item !== action.payload.product)],
        }
    case INCREASE_PRODUCT_DATA:
      return{
        ...state,
        productsInCart: action.payload.product
      }
    case DECREASE_PRODUCT_DATA:
        return{
          ...state,
          productsInCart: action.payload.product
        }
    default:
      return state
  }
}

export default cartReducer;
