import React from 'react';
import { useNavigate } from "react-router-dom";
import { authenticateUser } from '../../../store/userReducer/userActions';
import './logOutButton.css';
import { useDispatch } from 'react-redux';
import { removeAuthentication } from '../../../store/userReducer/userActions';

const LogOut = () => {
    const navigation= useNavigate();
    const dispatch= useDispatch();

    const logout = () => {
        if (window.confirm('Are you sure to logout')) {
                 localStorage.clear();
                 dispatch(removeAuthentication());
                 navigation('/');
        }
        return null;
    }

    return (
            <button onClick={() => logout()} className="logOutButton">Logout</button>
    )
}

export default LogOut;
