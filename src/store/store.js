import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/pages/logIn/emailSlice";
import { registerUser } from "./userReducer/userActions";
import { applyMiddleware, compose, createStore } from "redux";                                                //install redux for this
import thunk from "redux-thunk";
import rootReducers from "./rootReducer";

//this commented code is for redux toolkit -> here we use configureStore 
// export const store = configureStore({
//   reducer: {
//     user:userReducer,
//   },
// });


//this shows data in redux dev tool 
const composeEnhancer =
  process.env.NODE_ENV === "development" && typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const middlewares = [thunk];

export const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(...middlewares))
);
 
if(localStorage.getItem('email')){
  store.dispatch(registerUser(localStorage.getItem('email')));
}
