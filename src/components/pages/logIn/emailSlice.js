import { createSlice } from '@reduxjs/toolkit';
import {history} from '../../../App';
import { push } from "react-router-redux";
const initialState = {
 email: "",
 isAuthenticate: false,
 errorMsg: "",
}

export const userSlice= createSlice({
 name: 'user',
 initialState,                                                                                                 
 reducers: {
  changeEmail: (state, action) => {                                                                          
    // console.log(state.email);

    //call api here
    if(!state.email === "tannu.sharma@srijan.net"){
        state.isAuthenticate=true;
        // dispatch(updateUserData(state.email));
    }
   state.email = action.payload;
  },


  validateUser: (state, action)=>  (dispatch) =>{
    //   console.log(action.payload.email);
    if(action.payload.email === "tannu.sharma@srijan.net") {         
        //  dispatch(updateUserData(action.payload.email));
        state.email=action.payload.email;
        state.isAuthenticate=true;
        state.errorMsg="";
        dispatch(push('/products'));
    //    history.replace('/products');
    }
    else{
        state.errorMsg ="This Email id doesn't exist";
    }
  }
 },
})

// console.log(userSlice);

export const { changeEmail, validateUser } = userSlice.actions;

export default userSlice.reducer;