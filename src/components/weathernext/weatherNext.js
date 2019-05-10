import React from 'react';

import {getWeatherIcon} from '../../help/help';

function getDayOne(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
    var dayOne = date.getDay() + 1;

    if (dayOne > 6) {
        dayOne = dayOne - 7;
    }
    return days[dayOne];
}

function getDayTwo(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayTwo = date.getDay() + 2;

    if (dayTwo > 6) {
        dayTwo = dayTwo - 7;
    }
    return days[dayTwo];
}

function getDayThree(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayThree = date.getDay() + 3;

    if (dayThree > 6) {
        dayThree = dayThree - 7;
    }
    return days[dayThree];
}

function getDayFour(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayFour = date.getDay() + 4;

    if (dayFour > 6) {
        dayFour = dayFour - 7;
    }
    return days[dayFour];
}


export default function WeatherNext(props) {
    return (
        <React.Fragment>
            <div className="five-days-sec">
                <div className="row">
                    <div className="col-3">
                        <div className="day-col">
                            <div className="col-day-sec">
                                <h3>{getDayOne(props.date)}</h3>
                            </div>
                            <div className="day-icon-sec">
                                {/* <i className="wi wi-day-sunny-overcast"></i> */}
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.weather1)}></i>
                            </div>
                            <div className="day-weather-sec">
                                <h3>{props.temp1}°C</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="day-col">
                            <div className="col-day-sec">
                                <h3>{getDayTwo(props.date)}</h3>
                            </div>
                            <div className="day-icon-sec">
                                {/* <i className="wi wi-day-sunny"></i> */}
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.weather2)}></i>
                            </div>
                            <div className="day-weather-sec">
                                <h3>{props.temp2}°C</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="day-col">
                            <div className="col-day-sec">
                                <h3>{getDayThree(props.date)}</h3>
                            </div>
                            <div className="day-icon-sec">
                                {/* <i className="wi wi-day-cloudy-windy"></i> */}
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.weather3)}></i>
                            </div>
                            <div className="day-weather-sec">
                                <h3>{props.temp3}°C</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="day-col">
                            <div className="col-day-sec">
                                <h3>{getDayFour(props.date)}</h3>
                            </div>
                            <div className="day-icon-sec">
                                {/* <i className="wi wi-day-cloudy-gusts"></i> */}
                                <i className={"wi wi-" + getWeatherIcon(props.date, props.weather4)}></i>
                            </div>
                            <div className="day-weather-sec">
                                <h3>{props.temp4}°C</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}