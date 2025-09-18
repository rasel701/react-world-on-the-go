import React from "react";

const User = ({ user }) => {
  console.log(user);
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px",
      }}
    >
      <div>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <p>Country:{user.country}</p>
      </div>
    </div>
  );
};

export default User;
