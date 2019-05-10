import React from 'react';
import {getWeatherIcon} from '../../help/help';

function getDay(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

// function getTime(date) {
//     var time = date.getHours()+':'+date.getMinutes();
//     return time;
// }
function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function getFormattedDate(date) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let day = date.getDate();
    return months[date.getMonth()] + ' ' + day;
}

export default function CurrentTempControl(props) {
    return (
        <React.Fragment>
            <div className="current-details">
                <div className="row">
                    <div className="col-6 today-datetime-sec">
                        <p className="datetime">{getDay(props.date)} , {getFormattedDate(props.date)} <br />
                            {getTime(props.date)}</p>
                        <h1 className="weather">{props.temperature}°C</h1>
                    </div>
                    <div className="col-6 today-weather-img-sec">
                        {/* <i className="wi wi-day-cloudy-high"></i> */}
                        <i className={"wi wi-" + getWeatherIcon(props.date, props.label)}></i>
                        <div className="weather-des-sec">
                            <p className="weather-des">{props.label}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="three-col-sec">
                <div className="row">
                    <div className="col-4">
                        <div className="column">
                            <div className="col-icon-sec">
                                <i className="wi wi-strong-wind"></i>
                            </div>
                            <div className="col-heading">
                                <h3>Wind</h3>
                            </div>
                            <div className="col-weather">
                                <h3>{props.wind} km/h</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="column">
                            <div className="col-icon-sec">
                                <i className="wi wi-humidity"></i>
                            </div>
                            <div className="col-heading">
                                <h3>Humidity</h3>
                            </div>
                            <div className="col-weather">
                                <h3>{props.humidity}%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="column">
                            <div className="col-icon-sec">
                                <i className="wi wi-barometer"></i>
                            </div>
                            <div className="col-heading">
                                <h3>Pressure</h3>
                            </div>
                            <div className="col-weather">
                                <h3>{props.pressure} mb</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}