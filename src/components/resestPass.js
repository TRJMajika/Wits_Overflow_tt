import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Reset = () => {
    const emailRef = useRef();
    const { forgotPassword } = useUserContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        if (email) {
          forgotPassword(email);
          //alert("email sent");
        }
    }

    return (
        <div className="form">
          <h2> reset password </h2>
          <form onSubmit={onSubmit}>
            <input placeholder="Email" type="email" required ref={emailRef} />
            <button type="submit">send</button>
            <a href="/">Back to sign in</a>
          </form>
        </div>
    );
};

export default Reset;