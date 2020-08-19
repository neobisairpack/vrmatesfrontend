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
            axios.get('http://167.172.178.135/api/provide-services/', {headers: {
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

export const editPost = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(getInboxPostStarted());
        console.log(post)
        // axios
        //     .post(`http://167.172.178.135/api/services/`, {
        //             pickup_location: (post.country1).concat(" ", post.state1, " ", post.city1),
        //             drop_off_location: (post.country2).concat(" ", post.state2, " ", post.city2),
        //             deadline: (post.year).concat("-", post.month, "-", post.day),
        //             status: "Created, not accepted",
        //             service_type: "Pick Up",
        //             title: post.title,
        //             text: post.text,
        //             is_checked: false
        //         },
        //         {
        //             headers: {
        //                 "Authorization": "Token " + token
        //             }
        //         }
        //
        //     )
        //     .then(res => {
        //         console.log(res.data)
        //         dispatch(sendPostSuccess(res.data));
        //     })
        //     .catch(err => {
        //         console.log(post)
        //         dispatch(sendPostFailure(err));
        //     });
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