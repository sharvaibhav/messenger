import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";
export default combineReducers({
  messageReducer,
  usersReducer
});
