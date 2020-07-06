import {GET_PROFILE} from "./types";
import axios from "axios";
const baseUrl = "http://subsit-team-a.herokuapp.com/api/v1";

export const getProfile = () => async dispatch => {
    let token = localStorage.getItem("userLocal")
    console.log('getProfile', token)
    try{
        const res = await axios.get(`${baseUrl}/profile`, {
            headers: {
                Authorization: token
            }
        })
        console.log('getprofile2', res.data.data.profile)
        dispatch({
            type: GET_PROFILE,
            payload: res.data.data.profile
        })
    }catch(error){
        console.log(error, error.response)
    }
}
