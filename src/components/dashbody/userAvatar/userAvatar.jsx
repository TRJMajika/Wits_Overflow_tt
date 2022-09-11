import React from "react";
import {Link} from "react-router-dom";

import "./userAvatar.css";;

const UserAvatar = ({ id, gravatar, views }) => (
  <div className='img-card'>
    <div className='avatar-card'>
      <div className='avatar'>
        <Link className='avatar-link' to={`/users/${id}`}>
          <div className='logo-wrapper'>
            <img
              src={gravatar}
              alt='user-logo'
            />
          </div>
        </Link>
      </div>
      <div className='title'>
        <div className='grid fc-black-800'>
          {views}
          &nbsp;
          <span className='fc-light'>PROFILE VIEWS</span>
        </div>
      </div>
    </div>
  </div>
)

export default UserAvatar;