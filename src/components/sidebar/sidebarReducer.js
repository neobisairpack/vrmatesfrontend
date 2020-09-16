import {GET_USER_DATA_STARTED, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE, SET_IS_AUTHED} from "./sidebarActions";

const initialState = {
    user: {},
    loading: true,
    error: null,
    isAuthed: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DATA_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_USER_DATA_SUCCESS:
            localStorage.setItem("num", JSON.stringify(action.payload.id));
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null,
            };
        case GET_USER_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case SET_IS_AUTHED:
            return {
                ...state,
                loading: false,
                isAuthed: action.payload
            };
        default:
            return state;
    }
}
export default reducer
