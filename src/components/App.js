import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './DetailedForecast';
import { useState } from 'react'
import '../styles/App.css'

function App(props) {
  const { forecasts, location } = props;

  const [selectedDate, setSelectedDate] = useState(forecasts[0].date)
  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

  function handleForecastsSelect(date) {
    setSelectedDate(date);
  }

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} onForecastSelect={handleForecastsSelect} />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
};

App.propTypes = {
  //forecasts
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  //location
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};


export default App;
