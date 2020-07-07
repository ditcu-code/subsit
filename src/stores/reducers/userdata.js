import {GET_PROFILE, UPDATE_NAME} from "../actions/types";

const initialState= {
    profile: null,
    status: "",
}

const userdata = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE:
            return {
            ...state,
            profile: action.payload
            };
        case UPDATE_NAME:
            return{
            ...state,
            status: action.payload
            };
        default:
        return{
            ...state
        }
    }
}

export default userdata;