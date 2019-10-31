import users from "../user.json";

const initialState = {
  users: users,
  currentUser: { userId: 0, name: "henry" },
  remoteUser: { userId: 3, name: "shaun" }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_USER":
      return { ...state, remoteUser: action.payload };
    default:
      return state;
  }
};
