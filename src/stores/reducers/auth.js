// import { LOGIN_SUCCESS, LOGIN_FAILED /*SIGN_OUT*/ } from "../actions/types";
// const initialState = {
//   token: localStorage.getItem("token"),
//   error: null,
//   isAuthenticate: false
// }

// const auth = (state = initialState, action) => {
//   switch(action.type) {
//     default:
//       cekAuth()
//       return {
//         ...state
//       }
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isAuthenticate:true
//       }
//     case LOGIN_FAILED:
//       return {
//         ...state,
//         isAuthenticate:false,
//         token: localStorage.removeItem("token")
//       }
//     // case SIGN_OUT:
//     // localStorage.clear();
//     // return {
//     //   ...state,
//     //   token: null
//     // }
//   }
// }

// const cekAuth = (state = initialState) => {
//   if (initialState.token == null) {
//     initialState.isAuthenticate = false
//   } else {
//     initialState.isAuthenticate = true
//   }
// }

// export default auth;

import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  ERROR_LOGIN,
  ERROR_UPDATE,
  UPDATE_PROFILE,
  CHANGE_AVATAR
} from "../actions/types";

const authReducer = (
  state = localStorage.getItem("userLocal"),
  action
) => {
  switch (action.type) {
    case SIGN_UP:
      localStorage.setItem("userLocal", action.payload);
      return action.payload;

    case SIGN_IN:
      localStorage.setItem("userLocal", action.payload);
      return action.payload;

    case SIGN_OUT:
      localStorage.clear();
      alert("You are successfully Logout");
      return false;

    case UPDATE_PROFILE:
      localStorage.setItem("userLocal", [
        JSON.stringify({ ...state, name: action.payload.name })
      ]);
      console.log(state, action.payload);
      alert("Data successfully updated");
      return action.payload;

    case CHANGE_AVATAR:
      localStorage.setItem(
        "userLocal",
        JSON.stringify({ ...state, image: action.payload.image })
      );
      alert("Data successfully updated");
      return action.payload;

    case ERROR_LOGIN:
      localStorage.clear();
      alert("Incorrect Email or Password Combination");
      return false;

    case ERROR_UPDATE:
      localStorage.clear();
      alert("Your Token is Expired, please do Sign-in again");
      return false;

    default:
      return state;
  }
};

export default authReducer;