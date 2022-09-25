import "./profile.css";

/////////Thabelo:
import React, {Component} from "react";
import firebase from "../firebase/index";
import { UserContext } from "../context/userContext";


import { useEffect, useState } from 'react';
import {getAuth , onAuthStateChanged} from "firebase/auth" ;
import { app } from '../firebase/index' ;

const auth = getAuth(app) ;

//////////Thabelo:

const Profile = () => {
///////////Thabelo:
    const [u_username, setUsername] = useState('') ;
    const [u_id, setId] = useState('') ;
    const [u_email, setEmail] = useState('') ;

    
    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if(user){
               setId(user.uid)
               setEmail(user.email) ;
               setUsername(user.displayName) ;
            }
        })

 },[]);
    
 /////////Thabelo:
    return ( 
        <div className="profile">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://blogs.sun.ac.za/cib/files/2020/03/wits-logo.jpg" alt="" height="100px" width="100px" />
                </div>
            </div>
            <div className="lower-container">
                {/* <h3> { username } : { stuNo }</h3>
                <h4> { email } </h4>
                <h5> { } </h5> */}
                <h3> Username: {u_username}  </h3>
                <h4> Email Address: {u_email} </h4>
                <h4> About: {u_id} </h4>
                <button> back </button>
            </div>
        </div>
    );
}
 
export default Profile;
