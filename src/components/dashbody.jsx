import React from "react";
import UserAvatar from "./dashbody/userAvatar/userAvatar";
import './dashbody.css';
import UserContent from "./dashbody/userContent/userContent";
import { useUserContext } from "../context/userContext";


const Dashbody = () => {
  const { user} = useUserContext();
  return (
    <div className='grid'>
<UserAvatar
 // id={user.id}
  //gravatar={user.gravatar}
  //views={user.views}
/>
<UserContent
 displayName={user.displayName}
  //answers_count={user.answers_count}
  //posts_count={user.posts_count}
  //comments_count={user.comments_count}
  //tags_count={user.tags_count}
  //created_at={user.created_at}
/>
</div>
  );
};

export default Dashbody;
