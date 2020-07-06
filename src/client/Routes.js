import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/UserList";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UserList} />
    </div>
  );
};

export default Routes;
