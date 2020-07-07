import { combineReducers } from "redux";
import auth from "./auth";
import userdata from "./userdata";

export default combineReducers({
  auth,
  userdata,
});