import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/reviews.css';
import FullReview from "./full-review";
import axios from "axios";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import {getUserData} from "../sidebar/sidebarActions";
import {connect} from "react-redux";

const Reviews = (props) => {
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FFF',
        },
        iconEmpty: {
            color: '#b3b3b3',
        }
    })(Rating);
    const [rate, setRate] = useState([]);
    const [activeModal, setActiveModal] = useState(null);
    const [userId, setUserId] = useState(0)
    useEffect(() => {
        getReviews();
        props.getUserData()
        if(props.id){
            setUserId(props.id)
        }
        else{
            setUserId(props.userData.user.id)
        }

    }, [])
    const getReviews = () =>{
        let token = JSON.parse(localStorage.getItem("token"));
        let id = JSON.parse(localStorage.getItem("num"));
        axios.get('https://vrmates.co/backend/api/rating/', {
            headers: {
                "Authorization": "Token " + token
            }
        })
            .then(function(res){
                let reviews = []
                res.data.map((item) => {
                    if(item.provider.id === id){
                        reviews.push(item)
                    }
                })
                setRate(reviews);
            })
            .catch((err) => console.log(err))
    }
    const showFullReview = (index) => {
        setActiveModal(index);
    }
    return (
        <div className={"reviews " + (props.id ? "reviews__user-profile" : "reviews__profile")}>
            {rate.length === 0 ? <div className={"reviews__message"}>You have no reviews yet</div> :
            rate.map((item) =>
            <div key={item.id} className={"review"}>
               <div onClick={() => showFullReview(item.id)} className={"review " + ((item.id) % 2 !== 0 ? "review-orange" : "review-blue") }>
                   <div className={"review__rating"}>
                       <Box>
                           <StyledRating name="read-only" value={item.rating} size="small" readOnly precision={0.5}/>
                       </Box>
                   </div>
                   <div className={"review__text"}>
                       {item.text}
                   </div>
                   <div className={"review__time"}>
                       {item.date}
                   </div>
               </div>
                <FullReview {...item} show={activeModal === item.id}

                            onHide={() => setActiveModal(null)}/>
             </div>

            )}

        </div>
    );
};

const mapStateToProps = state => {
    return {
        userData: state.userData,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUserData: () =>
            dispatch(getUserData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
