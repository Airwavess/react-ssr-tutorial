import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../redux/users/users.actions";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
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
