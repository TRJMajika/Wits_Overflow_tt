///////Thabelo:

import React, { useState, useEffect } from 'react'
import firebase from '../firebase/index' 
//import {Container} from '@material-ui/core'


function AllPostsT() {
    const [posts, setPosts] = useState([]) ;

    const ref = firebase.firestore().collection("UserPosts");

    function AllPosts(){
        ref.onSnapshot((querySnapshot) => { 
            const items = [] ;
            querySnapshot.forEach((doc) => {items.push(doc.data()) ;
            }) ;
            setPosts(items) ;
        }) ;
    }

    useEffect(() => { AllPosts() }, []) ;

    return (
        <div>
             <h2>ALL POSTS</h2>
             
            {posts.map((post) => (
                <div key= {post.u_id}> 
                {/* <Container maxWidth="lg" style={{backgroundColor:"whitesmoke"}}> */}
                    <h5>Caption :  {post.u_caption}</h5>
                    <h5>Question - </h5>
                    <p> {post.u_question}</p>
                    <button type="details" variant="contained" color="primary">View in detail</button>
                {/* </Container> */}
                </div>
            ))}
       
  
          
        </div>
      
     
           

        
        
  )

}

export default AllPostsT ;


///////Thabelo: