import React, {useState} from 'react';
import '../popup-switch/style/popup.css';
import './style/popup-filter.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import filter from '../../dashboard/icons/filter-icon.svg';

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
        <div className={"switch"}>
            <p className={"filter__title"}>Providers</p>
            <ul>
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
            <p className={"filter__title"}>Set the date interval</p>
            <div>
                <p>From</p>
                <DatePicker
                    // selected={this.props.startDate}
                    // onChange={this.props.handleChange}
                    // showTimeSelect
                    customInput={<CustomInput />}
                    //value={this.props.startDate}
                    dateFormat="yy-MM-dd"
                />
                <p>To</p>
                <DatePicker
                    // placeholderText={t("checkin")}
                    // selected={startDate}
                    // onChange={date => setStartDate(date)}
                    selectsStart
                    minDate={new Date()}
                    className="filter-item"
                    required
                />
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