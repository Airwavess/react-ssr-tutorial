import Home from "./components/Home";
import UserList from "./components/UserList";

const Routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/users",
    component: UserList,
  },
];

export default Routes;
