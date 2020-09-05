import React, {useState} from 'react';
import '../popup-switch/style/popup.css';
import './style/popup-filter.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import filter from '../../dashboard/icons/filter-icon.svg';
import { FormGroup, Input } from 'reactstrap';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {connect} from "react-redux";
import {
    filterPosts,
} from "../../post/postActions";
import dateformat from 'dateformat';
import {withRouter} from "react-router-dom";

const Filter = (props) => {
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
    console.log(props.location.pathname)
    const searchFilter = () =>{
        let url = "";
        if(props.location.pathname === "/dashboard/providers"){
            url = "provide"
        }
        else{
            url = "service"
        }
        console.log(dateformat(date, "yyyy-mm-dd"))
        props.filterPosts(url, date, state.type, state.country1, state.country2)
        //props.state(false)
    }
    const cancelHandler = () => {
        props.state(false)
    }
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
                    //minDate={new Date()}
                    dateFormat="yy-MM-dd"
                    className={"filter__datepicker"}
                />
            </div>

            <p className={"filter__title"}>Departure/Arrival country</p>
            <div className={"filter__forms"}>
                <label className={"filter__dates-text"}>Departure</label>
                <FormGroup>
                    <CountryDropdown
                        name={"country"}
                        className={"filter__datepicker"}
                        defaultOptionLabel={"  "}
                        value={state.country1}
                        onChange={e => setState({
                            ...state,
                            country1: e
                        })} />
                </FormGroup>
                <label className={"filter__dates-text"}>Arrival</label>
                <FormGroup>
                    <CountryDropdown
                        name={"country"}
                        className={"filter__datepicker"}
                        defaultOptionLabel={"  "}
                        value={state.country2}
                        onChange={e => setState({
                            ...state,
                            country2: e
                        })} />
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

const mapDispatchToProps = dispatch => {
    return {
        filterPosts: (url, deadline, type, country1, country2) =>
            dispatch(filterPosts(url, deadline, type, country1, country2)),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Filter));