import React from "react";
import { useUserContext } from "../context/userContext";

const UsersPage = () => {
  const { user} = useUserContext();
  return (
    <div>
      
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <h1>Users Page to be Done </h1>
      
    </div>
  );
};

export default UsersPage;