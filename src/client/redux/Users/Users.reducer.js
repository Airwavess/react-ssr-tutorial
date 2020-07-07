import { STORE_USER_DATA } from "./Users.actions";

const reducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
