import { FETCH_USERS } from "./users.actions";

const reducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
