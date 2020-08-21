import axios from 'axios';
export const REMOVE_INBOX_POST = "REMOVE_INBOX_POST";
export const GET_INBOX_POST_STARTED = "GET_INBOX_POST_STARTED";
export const GET_INBOX_POST_SUCCESS = "GET_INBOX_POST_SUCCESS";
export const GET_INBOX_POST_FAILURE = "GET_INBOX_POST_FAILURE";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";

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
        axios
            .put(`http://167.172.178.135/api/services/${post.id}/`, {
                    pickup_location: (post.country1).concat(" ", post.state1, " ", post.city1),
                    drop_off_location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    requester_from: (post.country1).concat(" ", post.state1, " ", post.city1),
                    location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    deadline: (post.year).concat("-", post.month, "-", post.day),
                    status: "Created, not accepted",
                    title: post.title,
                    text: post.text,
                    preferences: post.preferences || "",
                    is_checked: false
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                dispatch(editPostSuccess(res.data));
            })
            .catch(err => {
                dispatch(getInboxPostFailure(err));
            });
    };
};

export const editPostProvide = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(getInboxPostStarted());
        console.log(post)
        axios
            .post(`http://167.172.178.135/api/provide-services/${post.id}/`, {
                    pickup_location: (post.country1).concat(" ", post.state1, " ", post.city1),
                    location: (post.country1).concat(" ", post.state1, " ", post.city1),
                    drop_off_location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    deadline: (post.year).concat("-", post.month, "-", post.day),
                    arrive_date: (post.year2).concat("-", post.month2, "-", post.day2, "T12:07:46Z"),
                    status: "Created, not accepted",
                    title: post.title,
                    text: post.text,
                    preferences: post.preferences || "",
                    is_checked: false
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(editPostSuccess(res.data));
            })
            .catch(err => {
                console.log(post)
                dispatch(editPostFailure(err));
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
const editPostSuccess = (data) => ({
    type: EDIT_POST_SUCCESS,
    payload: data
});
const editPostFailure = (error) => ({
    type: EDIT_POST_FAILURE,
    payload: error
});