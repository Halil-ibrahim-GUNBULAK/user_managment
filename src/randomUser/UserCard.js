import { useEffect, useState } from "react";
const UserCard = ({ user }) => {
  return (
    <div className="single-user">
      <img src={user.picture.large} alt="" />
      <div className="user-info">
        <h3>
          {user.name.first} {user.name.first}
        </h3>
        <p className="user-email">{user.email}</p>
        <p className="user-location">
          {" "}
          {user.location.country} | {user.location.city}
        </p>
      </div>
    </div>
  );
};
export default UserCard;
