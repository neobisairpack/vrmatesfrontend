import axios from 'axios';
export const SEND_REQUEST_SUCCESS = "SEND_REQUEST_SUCCESS";
export const SEND_REQUEST_FAILURE = "SEND_REQUEST_FAILURE";
export const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS";
export const GET_REQUEST_PROV_SUCCESS = "GET_REQUEST_PROV_SUCCESS";
export const GET_REQUEST_REQ_SUCCESS = "GET_REQUEST_REQ_SUCCESS";
export const GET_REQUEST_FAILURE = "GET_REQUEST_SUCCESS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const sendInterestedRequest = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        axios
            .post(`https://vrmates.co/api/request-services/`, {
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

export const sendInterestedRequestProvide = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        axios
            .post(`https://vrmates.co/api/request-provide-services/`, {
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

export const getInterestedRequest = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        axios
            .get(`https://vrmates.co/api/request-services/`,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                // if(id){
                //     const myRes = []
                //     res.data.map((item) => {
                //         if(item.service.id === id)
                //             myRes.push(item)
                //     })
                //     dispatch(getRequestSuccess(myRes));
                // }
                dispatch(getRequestReqSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRequestFailure(err));
            });
    };
};

export const getInterestedRequestById = (createdBy, id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    let url = "";
    if(createdBy === "Requester") url = 'request-services'
    else if (createdBy === "Provider") url = 'request-provide-services'
    return dispatch => {
        axios
            .get(`https://vrmates.co/api/${url}/`,
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

export const getInterestedRequestProvide = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        console.log("request")
        axios
            .get(`https://vrmates.co/api/request-provide-services/`,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                // if(id){
                //     const myRes = []
                //     res.data.map((item) => {
                //         if(item.service.id === id)
                //             myRes.push(item)
                //     })
                //     dispatch(getRequestSuccess(myRes));
                // }
                dispatch(getRequestProvSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRequestFailure(err));
            });
    };
};
export const changeStatusRequest = (req, status) => {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(req, status)
    return dispatch => {
        axios
            .put(`https://vrmates.co/api/request-services/${req.id}/`, {
                    status: status,
                    service: req.service.id,
                    accept: status === "Accepted"
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

export const changeStatusRequestProvide = (req, status) => {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(req, status)
    return dispatch => {
        axios
            .put(`https://vrmates.co/api/request-provide-services/${req.id}/`, {
                    status: status,
                    service: req.service.id,
                    accept: status === "Accepted"
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
const sendRequestSuccess = (data) => ({
    type: SEND_REQUEST_SUCCESS,
    payload: data
});

const sendRequestFailure = (error) => ({
    type: SEND_REQUEST_FAILURE,
    payload: error
});
const getRequestProvSuccess = (data) => ({
    type: GET_REQUEST_PROV_SUCCESS,
    payload: data
});

const getRequestReqSuccess = (data) => ({
    type: GET_REQUEST_REQ_SUCCESS,
    payload: data
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