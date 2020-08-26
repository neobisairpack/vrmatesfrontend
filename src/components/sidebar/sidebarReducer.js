import {GET_USER_DATA_STARTED, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE} from "./sidebarActions";

const initialState = {
    user: {},
    loading: true,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DATA_STARTED:
            console.log("started")
            return {
                ...state,
                loading: true
            };
        case GET_USER_DATA_SUCCESS:
            console.log(action)
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
    }
    return state
}
export default reducer
