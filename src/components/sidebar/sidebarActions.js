import axios from 'axios';
export const GET_USER_DATA_STARTED = "GET_USER_DATA_STARTED";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";

export const getUserData = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {

        dispatch(getUserDataStarted());
        axios
            .get(`http://167.172.178.135/users/me/`,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(getUserDataSuccess(res.data));
            })
            .catch(err => {
                console.log(token)
                dispatch(getUserDataFailure(err));
            });
    };
};

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