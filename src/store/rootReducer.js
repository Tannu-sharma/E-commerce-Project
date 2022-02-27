import { combineReducers } from "redux";
import cartReducer from "./cartReducer/cartReducer";
import loaderReducer from "./loaderReducer/loaderReducer";
import productsReducer from "./productsReducer/productsReducer";
import userReducer from "./userReducer/userReducer";
import registerUserReducer from './registerReducer/registerUserReducer';


const rootReducers = combineReducers({
  user: userReducer,                                                                                          //this user is that key which we actually see in redux dev tool
  products: productsReducer,
  cartProducts: cartReducer,
  loader:loaderReducer,
  registerUser: registerUserReducer,
});                                                                                                                    //user is just a name we give to userReducer

export default rootReducers;
