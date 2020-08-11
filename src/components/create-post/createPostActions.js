import axios from 'axios';
export const SEND_POST_STARTED = "SEND_POST_STARTED";
export const SEND_POST_SUCCESS = "SEND_POST_SUCCESS";
export const SEND_POST_FAILURE = "SEND_POST_FAILURE";

export const sendPostDelivery = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {

        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/delivery/`, {
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

export const sendProviderDelivery = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/provide-delivery/`, {
                    departure_location: (post.country1).concat(" ", post.state1, " ", post.city1),
                    departure_date: (post.year1).concat("-", post.month1, "-", post.day1),
                    arrival_location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    arrival_date: (post.year2).concat("-", post.month2, "-", post.day2),
                    status: "Created, not accepted",
                    title: post.title,
                    text: post.text,
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

export const sendPostAirport = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/pickup/`, {
                    pickup_location: (post.country1).concat(" ", post.state1, " ", post.city1),
                    drop_off_location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    deadline: (post.year).concat("-", post.month, "-", post.day, "T12:07:46Z"),
                    status: "Created, not accepted",
                    title: post.title,
                    text: post.text,
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

export const sendPostHosting = (post) => {
    console.log(post.year, post.month, post.day, typeof post.year)
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/hosting/`, {
                    requester_from: (post.country1).concat(" ", post.state1, " ", post.city1),
                    location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    date: (post.year).concat("-", post.month, "-", post.day),
                    status: "Created, not accepted",
                    title: post.title,
                    text: post.text,
                    preferences: post.preferences,
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