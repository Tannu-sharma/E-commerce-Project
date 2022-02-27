import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { registerUser } from '../../../store/userReducer/userActions';
import { changeEmail, validateUser } from './emailSlice';
import SignUp from '../signUp/SignUp';
import './logIn.css';                                                                                          //prop-types is a library in react

function LogIn(props) {
    const email = useSelector((state) => state.user.email);
    const errorMsg = useSelector((state) => state.user.errorMsg);
    const dispatch = useDispatch();

    const [logInState, setLogInState] = useState({email: "",password: ""});

    const [logInError, setLogInError] = useState({email: "",password: ""});
    const [isAlreadyHaveAccount, setIsAlreadyHaveAccount]= useState(false);

    let navigate = useNavigate();

    const setFieldValueHandler = (event) => {
        const updatedValue = event.target.value;
        const key = event.target.name;
        const updatedStates = {
            ...logInState,
            [key]: updatedValue,
        }
        setLogInState(updatedStates);

        setLogInError((prevError) => {
            return ({
                ...prevError,
                [key]: ""
            })
        })
    }

    const validation = () => {
        let isError = false;

        if (!logInState.email) {
            setLogInError((prevError) => {
                return ({
                    ...prevError,
                    email: "Email is required"
                })
            })
            isError = true;
        }
        else if (!logInState.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setLogInError((prevError) => {
                return ({
                    ...prevError,
                    email: "Please type Email in correct format"
                })
            })
            isError = true;
        }

        if (!logInState.password) {
            setLogInError((prevError) => {
                return ({
                    ...prevError,
                    password: "password is required"
                })
            })
            isError = true;
        }
        else if (!logInState.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
            setLogInError((prevError) => {
                return ({
                    ...prevError,
                    password: "Password must contain Minimum eight characters, at least one letter, one number and one special character"
                })
            })
            isError = true;
        }

        return (isError);
    }

    const submitLogInForm = (event) => {
        event.preventDefault();
        const isValidate = validation();
        if (!isValidate) {
            localStorage.setItem('email', logInState.email);
            // dispatch(changeEmail(logInState.email));
            navigate('/products');
            localStorage.setItem('email', logInState.email);
            dispatch( registerUser(logInState.email));                                               //validate user at server side
        }
    }

    const handleAccount = ()=>{
        setIsAlreadyHaveAccount(false);
      }

    return (
        (isAlreadyHaveAccount)?
        <React.Fragment>
            <form action="http://localhost:3000/login" method="POST" onSubmit={submitLogInForm} className="logInContainer">
                <h1 className="logInHeading">Log In</h1>

                <label className="logInLabel">Email</label><br /><br />
                <input type='text' name='email' onChange={(e) => setFieldValueHandler(e)} placeholder='tannu@gmail.com' className="logInInputBox" /><br /><br />
                <p className="logInError">{logInError.email}</p>
                {
                    errorMsg &&  <p className="logInError">{errorMsg}</p>
                }

                <label className="logInLabel">Password</label><br /><br />
                <input type='password' name='password' onChange={(e) => setFieldValueHandler(e)} placeholder='********' className="logInInputBox" /><br /><br />
                <p className="logInError">{logInError.password}</p>

                <span className="createAnAccount">Create An Account?  <button onClick={handleAccount}>SignUp</button></span>

                <button type="submit" className="logInButton">Log In</button>
            </form>
        </React.Fragment>
         :
        (<SignUp isAlreadyHaveAccount={isAlreadyHaveAccount} setIsAlreadyHaveAccount={setIsAlreadyHaveAccount}/>)
    )
}

export default LogIn;
