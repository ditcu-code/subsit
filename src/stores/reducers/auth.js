import { LOGIN_SUCCESS, LOGIN_FAILED /*SIGN_OUT*/ } from "../actions/types";
const initialState = {
  token: localStorage.getItem("token"),
  error: null,
  isAuthenticate: false
}

const auth = (state = initialState, action) => {
  switch(action.type) {
    default:
      cekAuth()
      return {
        ...state
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticate:true
      }
    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticate:false,
        token: localStorage.removeItem("token")
      }
    // case SIGN_OUT:
    // localStorage.clear();
    // return {
    //   ...state,
    //   token: null
    // }
  }
}

const cekAuth = (state = initialState) => {
  if (initialState.token == null) {
    initialState.isAuthenticate = false
  } else {
    initialState.isAuthenticate = true
  }
}

export default auth;