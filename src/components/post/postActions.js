import axios from 'axios';
export const SEND_REQUEST_SUCCESS = "SEND_REQUEST_SUCCESS";
export const SEND_REQUEST_FAILURE = "SEND_REQUEST_FAILURE";
export const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS";
export const GET_REQUEST_FAILURE = "GET_REQUEST_SUCCESS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const sendInterestedRequest = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        axios
            .post(`http://167.172.178.135/api/request-services/`, {
                    service: id,
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                console.log(res.data)
                dispatch(sendRequestSuccess(res.data));
            })
            .catch(err => {
                dispatch(sendRequestFailure(err));
            });
    };
};

export const getInterestedRequest = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        axios
            .get(`http://167.172.178.135/api/request-services/`,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                const myRes = []
                res.data.map((item) => {
                    if(item.service.id === id)
                        myRes.push(item)
                })
                dispatch(getRequestSuccess(myRes));
            })
            .catch(err => {
                dispatch(getRequestFailure(err));
            });
    };
};

const sendRequestSuccess = (data) => ({
    type: SEND_REQUEST_SUCCESS,
    payload: data
});

const sendRequestFailure = (error) => ({
    type: SEND_REQUEST_FAILURE,
    payload: error
});
const getRequestSuccess = (data) => ({
    type: GET_REQUEST_SUCCESS,
    payload: data
});

const getRequestFailure = (error) => ({
    type: GET_REQUEST_FAILURE,
    payload: error
});
export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
});