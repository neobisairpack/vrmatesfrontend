import axios from 'axios';
export const SEND_POST_STARTED = "SEND_POST_STARTED";
export const SEND_POST_SUCCESS = "SEND_POST_SUCCESS";
export const SEND_POST_FAILURE = "SEND_POST_FAILURE";

export const sendPost = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/delivery/`, {
                requester: 2,
                provider: null,
                pickup_location: (post.country1).concat(" ", post.state1, " ", post.city1),
                drop_off_location: (post.country2).concat(" ", post.state2, " ", post.city2),
                deadline: (post.year).concat("-", post.month, "-", post.day),
                status: "Created, not accepted",
                title: post.title,
                text: post.text,
                image: null,
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
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                console.log(token)
                dispatch(sendPostFailure(err));
            });
    };
};
const sendPostStarted = () => ({
    type: SEND_POST_STARTED
});

const sendPostSuccess = (data) => ({
    type: SEND_POST_SUCCESS,
    payload: data
});

const sendPostFailure = (error) => ({
    type: SEND_POST_FAILURE,
    payload: error
});