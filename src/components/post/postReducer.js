import {
    SEND_REQUEST_SUCCESS,
    SEND_REQUEST_FAILURE,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILURE,
    SET_CURRENT_USER
} from './postActions';
import {CHOOSE_YES_NO} from "../profile/profileActions";

const initialState = {
    posts: [],
    interested: [],
    curUser: {},
    image: {},
    loading: false,
    error: null,
    res: null,
}

const reducer = (state = initialState, action) => {
    let GET_REQUEST_FAILURE;
    switch (action.type) {
        case SEND_REQUEST_SUCCESS:
            return {
                ...state,
                loading: true
            };
        case SEND_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case GET_REQUEST_SUCCESS:
            let arr = []
            action.payload.map((item) => {
                if(item.status === "Pending"){
                    arr.push(item)
                }
            })
            return {
                ...state,
                loading: false,
                error: null,
                interested: arr
            };
        case GET_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                loading: false,
                curUser: action.payload
            };
    }
    return state
}
export default reducer
