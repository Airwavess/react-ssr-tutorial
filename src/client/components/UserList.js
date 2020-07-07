import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { storeUserData } from "../redux/Users/Users.actions";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      dispatch(storeUserData(res.data.data));
    });
  }, []);

  return (
    <div>
      <div>User List</div>
      <Link to="/">To home page</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.first_name} </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
