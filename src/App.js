import React, { Component } from 'react';

import CurrentTempControl from './components/currenttemperaturecontrol/currentTempControl';

import WeatherNext from './components/weathernext/weatherNext.js';

import './App.css';

import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {
        currentDate: new Date(),
      },
  
      dayOneWeather: {
        today: new Date(),
      },
  
      background: {
        date: new Date()
      },
      
      value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    this.weatherApi(this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    this.weatherApi("Colombo");
  }

  weatherApi(city) {
    const City = city;
    const apid = "47fbcaa73984b191b404fa9ab7e00ee5";

    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ City + ',LK&?&APPID='+ apid +'&units=metric')
      .then(res => {
        const currentWeather = res.data;
        console.log(currentWeather, "aaaaaaaaaa")
        this.setState({
          currentLocation: currentWeather.name,
          currentTemperature: (currentWeather.main.temp).toFixed(0),
          currentWeatherLabel: currentWeather.weather[0].main,
          currentWind: currentWeather.wind.speed,
          currentHumidity: currentWeather.main.humidity,
          currentPressure: currentWeather.main.pressure,
        });
      })

    axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+ City + ',LK&?&APPID='+ apid +'&units=metric')
      .then(res => {
        const dayOneWeather = res.data;
        console.log(dayOneWeather, "aaaaaaaaaa")
        this.setState({
          dayoneTemp: dayOneWeather.list[9].main.temp,
          dayOneLabel: dayOneWeather.list[9].weather[0].main,
        });
        const dayTwoWeather = res.data;
        this.setState({
          dayTwoTemp: dayTwoWeather.list[17].main.temp,
          dayTwoLabel: dayTwoWeather.list[17].weather[0].main,
        });
        const dayThreeWeather = res.data;
        this.setState({
          dayThreeTemp: dayThreeWeather.list[25].main.temp,
          dayThreeLabel: dayThreeWeather.list[25].weather[0].main,
        });
        const dayFourWeather = res.data;
        this.setState({
          dayFourTemp: dayFourWeather.list[33].main.temp,
          dayFourLabel: dayFourWeather.list[33].weather[0].main,
        });
      })
  }

  render() {

    function changeBackgroundImg(date) {
      if (date.getHours() <= 18) {
        return 'background-morning';
      }
      else {
        return 'background-night';
      }
    }

    let { currentDate } = this.state.currentWeather;
    let { today } = this.state.dayOneWeather;
    let { date } = this.state.background;
    return (
      <React.Fragment>
        <div className={document.body.style.backgroundImage = changeBackgroundImg(date)}>

          <div className="container">
            <form className="form" onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange} className="search-bar" placeholder="Search Location" list="list" />
              <span className="fas fa-map-marker-alt map-marker"></span>
              <datalist id="list">
                <option>Galle</option>
                <option>Matara</option>
                <option>Gampaha</option>
                <option>Kandy</option>
                <option>Polonnaruwa</option>
                <option>Jaffna</option>
                <option>Rathnapura</option>
              </datalist>
            </form>

            <CurrentTempControl location={this.state.currentLocation} date={currentDate} temperature={this.state.currentTemperature} label={this.state.currentWeatherLabel} wind={this.state.currentWind} humidity={this.state.currentHumidity} pressure={this.state.currentPressure} />
            <WeatherNext date={today} weather1={this.state.dayOneLabel} temp1={this.state.dayoneTemp} weather2={this.state.dayTwoLabel} temp2={this.state.dayTwoTemp} weather3={this.state.dayThreeLabel} temp3={this.state.dayThreeTemp} weather4={this.state.dayFourLabel} temp4={this.state.dayFourTemp} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
