import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../randomUser/UserCard";
import Header from "./Header";
const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async (params) => {
    const response = await axios.get(" https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
    console.log(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <Header />
      <ul>
        {users.map((user, index) => (
          <li>
            {""}
            <UserCard key={index} user={user} /> {""}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RandomUser;
