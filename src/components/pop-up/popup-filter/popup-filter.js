import React, {useState} from 'react';
import '../popup-switch/style/popup.css';
import './style/popup-filter.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import filter from '../../dashboard/icons/filter-icon.svg';
import { FormGroup, Input } from 'reactstrap';
import axios from 'axios'
import {connect} from "react-redux";
import {
    filterPosts,
} from "../../post/postActions";
import dateformat from 'dateformat';

const Filter = (props) => {
    const [state, setState] = useState({
        type: "",
        deadline: ""
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
        props.filterPosts("services", dateformat(date, "yyyy-mm-dd"), state.type)
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
                           defaultChecked={state.type === "Delivery"}
                           onChange={(e) => handleChange(e)}/>
                    <label>Airport pick up/drop off</label>
                </li>
                <li>
                    <input value={"Hosting"} type={"radio"} name={"type"}
                           defaultChecked={state.type === "Delivery"}
                           onChange={(e) => handleChange(e)}/>
                    <label>Hosting</label>
                </li>
            </ul>
            <label className={"filter__title"}>Set the date</label>
            <div className={"filter__forms"}>

                <DatePicker
                    selected={date}
                    onChange={date => setDate(date)}
                    minDate={new Date()}
                    dateFormat="yy-MM-dd"
                    className={"filter__datepicker"}
                />
            </div>

            <p className={"filter__title"}>Departure/Arrival country</p>
            <div className={"filter__forms"}>
                <label className={"filter__dates-text"}>Departure</label>
                <FormGroup>
                    <Input className={"filter__datepicker"} type="select">
                        <option></option>
                    </Input>
                </FormGroup>
                <label className={"filter__dates-text"}>Arrival</label>
                <FormGroup>
                    <Input className={"filter__datepicker"} type="select">
                        <option></option>
                    </Input>
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
        filterPosts: (url, deadline, type) =>
            dispatch(filterPosts(url, deadline, type)),
    }
}

export default connect(null, mapDispatchToProps)(Filter);