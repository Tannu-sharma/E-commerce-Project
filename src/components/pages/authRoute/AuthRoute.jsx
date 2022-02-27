import React from 'react';
import { Navigate } from "react-router-dom";


function AuthRoute(props) {
    const isLogin = localStorage.getItem('email');

    if(isLogin){
        return props.children;
    }
       return <Navigate to="/" />
}

export default AuthRoute;
