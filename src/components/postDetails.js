import React from "react";

import { useLocation } from "react-router-dom";

const PostDetails = (props) => {

    const loc = useLocation() ;
    return ( 
        <div className="details">
            <h2>Post Details - Post Made By - {loc.state.my_username}  with a Email of - {loc.state.my_email} </h2>
            <h3>Caption: {loc.state.my_caption}  </h3>
            <p>"Question" {loc.state.my_question} </p>
            <h3>Posted by: {loc.state.my_username} </h3>
            <h4>Date:</h4>
        </div>
    );
}
 
export default PostDetails;