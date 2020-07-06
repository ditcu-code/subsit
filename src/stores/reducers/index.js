import { combineReducers } from "redux";
import authReducers from "./auth";
import userdata from "./userdata";

export default combineReducers({
  auth: authReducers, userdata
});