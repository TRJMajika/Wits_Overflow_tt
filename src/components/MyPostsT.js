import React, {Component} from "react";
import firebase from "../firebase/index";
import { UserContext } from "../context/userContext";


import { useEffect, useState } from 'react';
import {getAuth , onAuthStateChanged} from "firebase/auth" ;
import { app } from '../firebase/index' ;
import {Container} from '@material-ui/core';

const auth = getAuth(app) ;

function MyPostsT(){
    const [myposts, setMyPosts] = useState([]) ;
    const [u_id, setId] = useState('') ;


    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if(user){
               setId(user.uid)
            }
        })

    },[]);

   

    const ref = firebase.firestore().collection("UserPosts") ;



    
    function getMyPosts(){
        ref.where('u_id', '==', u_id ).onSnapshot((querySnapshot) => {
            const items = [] ;
            querySnapshot.forEach((doc) => {
                items.push(doc.data()) ;
            }) ;
            setMyPosts(items) ;
        })
    }

    useEffect(() => {
        getMyPosts() ;
    }) ;


   
 
    
    return (
        <div>
             <h2>My Posts</h2>
             
            {myposts.map((mypost) => (
                <>
                <div key= {mypost.u_id}> 
                <Container maxWidth="lg" style={{backgroundColor:"whitesmoke"}}>
                    <h5>Username :  {mypost.u_username}</h5>
                    <h5>Email :  {mypost.u_email}</h5>
                    <h5>Caption :  {mypost.u_caption}</h5>
                    <h5>Question : <p> {mypost.u_question}</p> </h5>
                 
                 </Container>
                </div>
                <div>
                <p>    ===========================================================================================================================</p>
               </div>
                </>
            ))}
       
  
          
        </div>
             
  )
}

export default MyPostsT ;