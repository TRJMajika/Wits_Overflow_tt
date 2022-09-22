import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signup = () => {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const studentNumRef = useRef();
  const facultyRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (email && password && username) registerUser(email, password, username);
  };

  return (
    <div className="form">
      <h2> Sign Up</h2>
      <form onSubmit={onSubmit}>
        {/* <input placeholder="Firstname" type="first" required ref={firstnameRef} />
        <input placeholder="Lastname" type="last" required ref={lastnameRef} /> */}
        <input placeholder="Username" type="username" required ref={usernameRef} />
        <input placeholder="Student number" type="stunum" required ref={studentNumRef} />
        {/* <input placeholder="Username" type="username" required ref={usernameRef} /> */}
        <input placeholder="Email" type="email"  required ref={emailRef} />
        <input placeholder="Password" type="password"  required ref={passwordRef} />
        <input placeholder="Confirm password" type="password" required ref={confirmPassRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;