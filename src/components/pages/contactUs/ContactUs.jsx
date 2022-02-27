import React, { useState } from "react";
import './contactUs.css';

function Field(props) {
  return (
    <div className="field">
      <label className="contactUsLabel">{props.label}</label><br /><br />
      <input type="text" className="contactUsInputBox" name={props.name} value={props.fieldValue} onChange={props.setFieldValue} /><br /><br />
      <p className="error">{props.errorMsg}</p>
    </div>
  );
}

function ContactUs() {
  const fieldsInfo = [
    {
      'label': 'Email',
      'name': 'email'
    },
    {
      'label': 'Mobile No',
      'name': 'mobileNo'
    },
    {
      'label': 'Message',
      'name': 'message'
    },
  ];

  const [state, setState] = useState(
    {
      email: "",
      mobileNo: "",
      message: "",
    }
  );

  const [error, setError] = useState(
    {
      email: "",
      mobileNo: "",
      message: "",
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
    if(!state.message){
      setError((prevError)=>{
        return({
          ...prevError,
          message:"Message is required"
        })
      })
      isError=true;
    }
    return(isError);
  }
  const submit = (event) => {
    event.preventDefault();
    const isValidate = validation();
    if(!isValidate){
      alert("form submitted");
    }
  }

  return (                                                                           
    <React.Fragment>
      <form onSubmit={submit} className="contactUsForm">
        <div className="contactUsHeading">
          <h1>Contact US</h1>
        </div>
        {                                                                                                                                                 
          fieldsInfo.map((field, key) => {
            return (<Field label={field.label} name={field.name} key={key} setFieldValue={setFieldValueHandler} fieldValue={state[field.name]} errorMsg={error[field.name]}/>);
          })
        }
        <button type="submit" className="submitButton">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default ContactUs;
