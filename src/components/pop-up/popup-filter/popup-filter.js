import React, {useEffect, useState} from 'react';
import '../popup-switch/style/popup.css';
import './style/popup-filter.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import filter from '../../dashboard/icons/filter-icon.svg';
import { FormGroup, Input } from 'reactstrap';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {connect} from "react-redux";
import {
    filterPosts, getPostsDashboard,
} from "../../post/postActions";
import dateformat from 'dateformat';
import {withRouter} from "react-router-dom";

const Filter = (props) => {
    useEffect(() => {
        if(props.location.pathname === "/dashboard/providers"){

            props.getPostsDashboard("provide-services")
        }
        else{
            props.getPostsDashboard("services")
        }
    }, [])
    const [state, setState] = useState({
        type: "",
        deadline: "",
        country1: "",
        country2: ""
    })
    const [date, setDate] = useState("")
    const handleChange = (e) =>{
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    const searchFilter = () =>{
        let url = "";
        if(props.location.pathname === "/dashboard/providers"){
            url = "provide"
        }
        else{
            url="service"
        }
        props.filterPosts(url, date, state.type, state.country1, state.country2)
    }
    const cancelHandler = () => {
        props.state(false)
    }
    const {posts} = props.post;

    const getListPickUp = () => {
        return (
            posts.map((item) =>
                <option name={"country1"} key={item.id} value={item.pickup_location}>{item.pickup_location}</option>
            )
        );
    };
    const getListDropOff = () => {
        return (
            posts.map((item) =>
                <option name={"country1"} key={item.id} value={item.drop_off_location}>{item.drop_off_location}</option>
            )
        );
    };
    return (
        <div className={"filter"}>
            <label className={"filter__title"}>Choose the type of service</label>
            <ul className={"switch__list"}>
                <li>
                    <input value={"Delivery"} type={"radio"} name={"type"}
                           defaultChecked={state.type === "Delivery"}
                           onChange={(e) => handleChange(e)}/>
                    <label>Package Delivery</label>
                </li>
                <li>
                    <input value={"Pick+Up"} type={"radio"} name={"type"}
                           defaultChecked={state.type === "Pick+Up"}
                           onChange={(e) => handleChange(e)}/>
                    <label>Airport pick up/drop off</label>
                </li>
                <li>
                    <input value={"Hosting"} type={"radio"} name={"type"}
                           defaultChecked={state.type === "Hosting"}
                           onChange={(e) => handleChange(e)}/>
                    <label>Hosting</label>
                </li>
            </ul>
            <label className={"filter__title"}>Set the date</label>
            <div className={"filter__forms"}>

                <DatePicker
                    selected={date}
                    onChange={date => setDate(date)}
                    dateFormat="yy-MM-dd"
                    className={"filter__datepicker"}
                />
            </div>

            <p className={"filter__title"}>Departure/Arrival location</p>
            <div className={"filter__forms"}>
                <label className={"filter__dates-text"}>Departure</label>
                <FormGroup>
                    <select required name={"country1"} value={state.country1} onChange={e => handleChange(e)}
                            className={"filter__datepicker"}>
                        {getListPickUp()}
                    </select>
                </FormGroup>
                <label className={"filter__dates-text"}>Arrival</label>
                <FormGroup>
                    <select required name={"country2"} value={state.country2} onChange={e => handleChange(e)}
                            className={"filter__datepicker"}>
                        {getListDropOff()}
                    </select>
                </FormGroup>
            </div>
            <div className={"switch__buttons"}>
                <ul>
                    <li><button onClick={() => cancelHandler()} className={"switch__button"}>Cancel</button></li>
                    <li><button onClick={() => searchFilter()} className={"switch__button"}>Search</button></li>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        post: state.post,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        filterPosts: (url, deadline, type, country1, country2) =>
            dispatch(filterPosts(url, deadline, type, country1, country2)),
        getPostsDashboard: (url) =>
            dispatch(getPostsDashboard(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Filter));