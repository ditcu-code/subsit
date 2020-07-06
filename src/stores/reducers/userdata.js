import {GET_PROFILE} from "../actions/types";

const initialState= {
    profile: null,
    watchlist: [],
    myreview: []
}

const userdata = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE:
            return {
            ...state,
            profile: action.payload
            }
        default:
        return{
            ...state
        }
    }
}

export default userdata;