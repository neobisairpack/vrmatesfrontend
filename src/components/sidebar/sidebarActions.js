import axios from 'axios';
export const GET_USER_DATA_STARTED = "GET_USER_DATA_STARTED";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";
export const SET_IS_AUTHED = "SET_IS_AUTHED";

const mainURL = "http://167.172.178.135:8000";
export const getUserData = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {

        dispatch(getUserDataStarted());
        axios
            .get(`${mainURL}/users/me/`,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                dispatch(getUserDataSuccess(res.data));
            })
            .catch(err => {
                dispatch(getUserDataFailure(err));
            });
    };
};

export const setIsAuthed = (data) =>({
    type: SET_IS_AUTHED,
    payload: data
})

const getUserDataStarted = () => ({
    type: GET_USER_DATA_STARTED
});

const getUserDataSuccess = (data) => ({
    type: GET_USER_DATA_SUCCESS,
    payload: data
});

const getUserDataFailure = (error) => ({
    type: GET_USER_DATA_FAILURE,
    payload: error
});