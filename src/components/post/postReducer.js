import {
    SEND_REQUEST_SUCCESS,
    SEND_REQUEST_FAILURE,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILURE,
    SET_CURRENT_USER, GET_REQUEST_REQ_SUCCESS, GET_REQUEST_PROV_SUCCESS, GET_DASHBOARD_POSTS_SUCCESS, SET_IS_SEND_FALSE
} from './postActions';
import {CHOOSE_YES_NO} from "../profile/profileActions";

const initialState = {
    posts: [],
    interestedProv: [],
    interestedReq: [],
    interested: [],
    curUser: {},
    image: {},
    loading: false,
    error: null,
    res: null,
    isSend: null,
    filter: false
}

const reducer = (state = initialState, action) => {
    let GET_REQUEST_FAILURE;
    switch (action.type) {
        case SEND_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                isSend: true
            };
        case SEND_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isSend: false
            };
        case GET_DASHBOARD_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                posts: action.payload,
                filter: action.filter
            };
        case GET_REQUEST_REQ_SUCCESS:
            let all = []
            action.payload.map((item) => {
                if(item.status === "Pending"){
                    all.push(item)
                }
            })
            return {
                ...state,
                loading: false,
                error: null,
                interestedReq: all
            };
        case GET_REQUEST_SUCCESS:

            return {
                ...state,
                loading: false,
                error: null,
                interested: action.payload
            };
        case GET_REQUEST_PROV_SUCCESS:
            let prov = []
            action.payload.map((item) => {
                if(item.status === "Pending"){
                    prov.push(item)
                }
            })
            return {
                ...state,
                loading: false,
                error: null,
                interestedProv: prov
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
        case SET_IS_SEND_FALSE:
            return {
                ...state,
                isSend: null,
            };
    }
    return state
}
export default reducer
