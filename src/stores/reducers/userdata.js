import {GET_PROFILE, UPDATE_NAME} from "../actions/types";

const initialState= {
    profile: null,
    status: false,
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
            status: true
            };
        default:
        return{
            ...state
        }
    }
}

export default userdata;