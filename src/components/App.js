import React, { useState, useEffect } from 'react';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './DetailedForecast';
import '../styles/App.css'
import getForecast from '../requests/getForecast';
import SearchForm from './SearchForm';

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(forecasts[0]?.date);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("")


  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  useEffect(() => {
    getForecast("Manchester", setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      <SearchForm searchText={searchText} setSearchText={setSearchText} onSubmit={handleCitySearch} />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
};

export default App;
