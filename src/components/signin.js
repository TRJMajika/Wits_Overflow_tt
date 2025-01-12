import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
//import { useNavigate } from "react-router-dom";
//import Popup from 'reactjs-popup';

const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { signInUser,forgotPassword } = useUserContext();
  const { signInUser } = useUserContext();
  //const nav = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
    // if (email && password){
    //   if (signInUser(email, password))
    //     nav('/dashboard')
    // } 
  };

  
  //on click handler, calls reset password auth, and passes email as parameter
  // const resetHandler = () => {
  //   const email = emailRef.current.value;
  //   if (email) forgotPassword(email).then(() => {
  //     emailRef.current.value = ""; 
  //     //return true;
  //   })
  //   //if (!email) return false;
  // }


  return (
    <div className="form">
      <h2> Sign In </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" required ref={emailRef} />
        <input placeholder="Password" type="password" required ref={passwordRef} />
        <button type="submit">Sign In</button>
        {/* <p onClick={resetHandler}>Forgot Password ?</p> */}
        <a href="/reset">Forgot Password ?</a>
        {/* <a href="/signup">New user? Sign Up</a> */}
        {/* <Pop trigger={!resetHandler}>
          <div style={{color:'red', width:'100%', position:'fixed', left:'45%', top:'70%'}}>email required</div>
        </Popup> //pops up error if email field is empty*/}  
      </form>
    </div>
  );
};

export default Signin;
