import React, { useState } from "react";
import signUpImage from './signUpImage.jpeg';
import { registerUser } from '../../../store/registerReducer/registerUserActions';
import LogIn from '../logIn/LogIn';
import { useDispatch } from "react-redux";
import { useNavigate  } from 'react-router-dom';
import './signUp.css';

function Field(props) {
  return (
    <div className="field">
    <>
      <label className="signUpLabel">{props.label}</label><br /><br />
      <input type={props.type} className="signUpInputBox" name={props.name} value={props.fieldValue} onChange={props.setFieldValue} placeholder={props.placeholder}/><br /><br />
      <p className="error">{props.errorMsg}</p>
    </>
    </div>
  );
}

function SignUp(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const fieldsInfo = [
    {
      'type':'text',
      'label': 'First Name*',
      'name': 'firstName',
      'placeholder': 'Your first Name'
    },
    {
      'type':'text',
      'label': 'Last Name*',
      'name': 'lastName',
      'placeholder': 'Your last Name'
    },
    {
      'type':'text',
      'label': 'Email*',
      'name': 'email',
      'placeholder': 'tannu@gmail.com'
    },
    {
      'type':'text',
      'label': 'Mobile Number*',
      'name': 'mobileNo',
      'placeholder': '+91 XXXXX XXXXX'

    },
    {
      'type':'text',
      'label': 'Address*',
      'name': 'address',
      'placeholder': 'Your address'
    },
    {
      'type':'password',
      'label': 'Password*',
      'name': 'password',
      'placeholder': '********'
    },
    {
      'type':'date',
      'label': 'DOB*',
      'name': 'dob',
      'placeholder': '',
    },

]

  const [state, setState] = useState(
    {
      firstName:"",
      lastName:"",
      email: "",
      mobileNo: "",
      address:"",
      password:"",
      dob:"",
    }
  );

  const [error, setError] = useState(
    {
      firstName:"",
      lastName:"",
      email: "",
      mobileNo: "",
      address:"",
      password:"",
      dob:"",
    }
  );

  const setFieldValueHandler = (event) => {
    const updatedValue = event.target.value;
    const key = event.target.name;
    const updatedStates = {
      ...state,
      [key]: updatedValue,                                
    }
    setState(updatedStates);

    setError((prevError)=>{
      return({
        ...prevError,
        [key]:""
      })
    })
  }

  const validation = () => {
    let isError = false;

    if (!state.firstName) {
      setError((prevError)=>{
        return({
          ...prevError,
          firstName:"First Name is required"
        })
      })
      isError=true;
   }
   if (!state.lastName) {
    setError((prevError)=>{
      return({
        ...prevError,
        lastName:"Last Name is required"
      })
    })
    isError=true;
 }
    if (!state.email) {
       setError((prevError)=>{
         return({
           ...prevError,
           email:"Email is required"
         })
       })
       isError=true;
    }
    else if (!state.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setError((prevError)=>{
        return({
          ...prevError,
          email:"Please type Email in correct format"
        })
      })
      isError=true;
   }
     if(!state.mobileNo){
      setError((prevError)=>{
        return({
          ...prevError,
          mobileNo:"Mobile Number is required"
        })
      })
      isError=true;
    }
    if(!state.address){
      setError((prevError)=>{
        return({
          ...prevError,
          address:"Address is required"
        })
      })
      isError=true;
    }
    if (!state.password) {
      setError((prevError)=>{
        return({
          ...prevError,
         password:"Password is required"
        })
      })
      isError=true;
   }
   else if (!state.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
    setError((prevError) => {
        return ({
            ...prevError,
            password: "Password must contain Minimum eight characters, at least one letter, one number and one special character"
        })
    })
    isError = true;
}
if (!state.dob) {
  setError((prevError)=>{
    return({
      ...prevError,
     dob:"Date of birth is required"
    })
  })
  isError=true;
}
    return(isError);

  }
  const submit = (event) => {
    event.preventDefault();
    const isValidate = validation();
    if (!isValidate) {
      localStorage.setItem('email', state.email);
      // dispatch(changeEmail(logInState.email));
      // navigate('/products');
      // localStorage.setItem('email', state.email);
      dispatch( registerUser(state) );                                                        //validate user at server side
  }
  }
  const handleAccount = ()=>{
    props.setIsAlreadyHaveAccount(true);
  }

  return (                                          
    <React.Fragment>
      <form action="http://localhost:3000/signUp" method="POST" onSubmit={submit}  className="signUpForm">

        <div className="signUpHeading">
          <h1>Sign Up</h1>
        </div>
        {                                                                                                                                                 
          fieldsInfo.map((field, key) => {
            return (<Field type={field.type} label={field.label} name={field.name}  key={key} 
              setFieldValue={setFieldValueHandler} fieldValue={state[field.name]} errorMsg={error[field.name]} 
              placeholder={field.placeholder}/>);
          })
        }
        <span className="alreadyHaveAccount">Already Have an Account?  <button onClick={handleAccount}>LogIn</button></span>

        <button type="submit" className="submitButton">Signup</button>
      </form>
    </React.Fragment>
  );
}

export default SignUp;
