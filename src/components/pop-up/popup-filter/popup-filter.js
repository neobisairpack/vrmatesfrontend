import React from 'react';
import '../popup-switch/style/popup.css';
import './style/popup-filter.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import filter from '../../dashboard/icons/filter-icon.svg';
import { FormGroup, Input } from 'reactstrap';


const Filter = () => {

    const CustomInput = () => {
            return (
                <div className="wrapper">
                    <i aria-hidden="true" className="fa fa-calendar"></i>
                    <input className="dateInput" type="text" />
                </div>
            )
    }
    return (
        <div className={"filter"}>
            <label className={"filter__title"}>Choose the type of service</label>
            <ul className={"switch__list"}>
                <li>
                    <input type={"radio"} name={"radio"} />
                    <label>Package Delivery</label>
                </li>
                <li>
                    <input type={"radio"} name={"radio"}/>
                    <label>Airport pick up/drop off</label>
                </li>
                <li>
                    <input type={"radio"} name={"radio"}/>
                    <label>Hosting</label>
                </li>
            </ul>
            <label className={"filter__title"}>Set the date interval</label>
            <div className={"filter__forms"}>

                <label className={"filter__dates-text"}>From</label>
                <DatePicker
                    // selected={this.props.startDate}
                    // onChange={this.props.handleChange}
                    // showTimeSelect
                    //value={this.props.startDate}
                    minDate={new Date()}
                    dateFormat="yy-MM-dd"
                    className={"filter__datepicker"}
                />
                <label className={"filter__dates-text"}>To</label>
                <DatePicker
                    // placeholderText={t("checkin")}
                    // selected={startDate}
                    // onChange={date => setStartDate(date)}
                    selectsStart
                    className={"filter__datepicker"}
                    dateFormat="yy-MM-dd"
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
                    <li><button className={"switch__button"}>Cancel</button></li>
                    <li><button className={"switch__button"}>Search</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Filter;