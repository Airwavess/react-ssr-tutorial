import { createStore } from "redux";
import userReducer from "./Users/Users.reducer";

const store = createStore(userReducer);

export default store;
