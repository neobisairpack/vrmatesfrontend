import axios from 'axios';
export const GET_INBOX_POST = "GET_INBOX_POST";
export const REMOVE_INBOX_POST = "REMOVE_INBOX_POST";
export const GET_INBOX_POST_STARTED = "GET_INBOX_POST_STARTED";
export const GET_INBOX_POST_SUCCESS = "GET_INBOX_POST_SUCCESS";
export const GET_INBOX_POST_FAILURE = "GET_INBOX_POST_FAILURE";

export const getPosts = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(getInboxPostStarted());
        axios.all([
            axios.get('http://167.172.178.135/api/services/', {headers: {
                    "Authorization": "Token " + token
                }}),
            axios.get('http://167.172.178.135/api/services/', {headers: {
                    "Authorization": "Token " + token
                }})
        ])
            .then(axios.spread(function(req, prov){
                let reqData = req.data || [];
                let provData = prov.data || [];
                let res = reqData.concat(provData)
                dispatch(getInboxPostSuccess(res))
            }) )
            .catch(err => {
                dispatch(getInboxPostFailure(err));
            });
    };
};

const getInboxPostStarted = () => ({
    type: GET_INBOX_POST_STARTED
});

const getInboxPostSuccess = (data) => ({
    type: GET_INBOX_POST_SUCCESS,
    payload: data
});

const getInboxPostFailure = (error) => ({
    type: GET_INBOX_POST_FAILURE,
    payload: error
});