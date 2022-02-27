import React from 'react';
import {Navigate} from "react-router-dom";


function NoAuthRoute(props) {

    const isLogin = localStorage.getItem('email');

    if(isLogin){
        return <Navigate to="/products" />;
    }
       return props.children;
}

export default NoAuthRoute;
