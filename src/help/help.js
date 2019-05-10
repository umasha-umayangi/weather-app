function getTimeofDay(date) {
    if (date.getHours() <= 18) {
        return 'day';
    }
    else {
        return 'night';
    }
}

function getWeatherCondition(condition, timeofDay) {
    var weatherCondition;
    switch (condition) {
        case "Clear":
        if (timeofDay === 'day') {
            weatherCondition = "sunny";
        } 
        else {
            weatherCondition = "clear";
        }
        break;

        case "Sunny":
        weatherCondition = "sunny";
        break;

        case "Clouds":
        weatherCondition = "cloudy";
        break;

        case "Cloudy high":
        weatherCondition = "cloudy-high";
        break;

        case "Cloudy windy":
        weatherCondition = "cloudy-windy";
        break;

        case "Cloudy gusts":
        weatherCondition = "cloudy-gusts";
        break;

        case "Rain":
        weatherCondition = "rain";
        break;

        case "Showers":
        weatherCondition = "showers";
        break;

        case "Thunderstorm":
        weatherCondition = "thunderstorm";
        break;

        case "Snow":
        weatherCondition = "snow";
        break;

        default:
        weatherCondition = ' ';
    }
    return weatherCondition;
}

export function getWeatherIcon(date, weatherCondition) {
    var timeofDay = getTimeofDay(date);
    var condition = getWeatherCondition(weatherCondition, timeofDay);
    return timeofDay + '-' + condition;
}