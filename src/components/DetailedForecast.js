import React from 'react';
import PropTypes from "prop-types";
import '../styles/DetailedForecast.css'

const ForecastDetails = ({ forecast }) => {

    const { date, temperature, humidity, wind } = forecast;

    const formattedDate = new Date(date).toDateString()


    return (
        <div className="detailed-forecast-summary">
            <div className="detailed-forecast-summary__date">
                <h1>{formattedDate}</h1>
            </div>
            <div className="detailed-forecast-summary__temperature">
                <p>Maximum Temperature: {temperature.max}&deg;C</p>
            </div>
            <div className="detailed-forecast-summary__temperature">
                <p>Minimum Temperature: {temperature.min}&deg;C</p>
            </div>
            <div className="detailed-forecast-summary__humidity">
                <p>Humidity: {humidity}</p>
            </div>
            <div className="detailed-forecast-summary__humidity">
                <p>Wind Speed: {wind.speed}mph</p>
            </div>
        </div>
    );
};

ForecastDetails.propTypes = {
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number
    }).isRequired
}


export default ForecastDetails;