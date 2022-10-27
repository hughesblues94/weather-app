import React from 'react';
import ForecastSummary from './ForecastSummary';
import '../styles/ForecastSummaries.css'

const ForecastSummaries = ({ forecasts }) => (
    <div className="forecast-summaries">
        {forecasts.map(forecast => (
            <ForecastSummary
                key={forecast.date}
                date={forecast.date}
                description={forecast.description}
                icon={forecast.icon}
                temperature={forecast.temperature}
            />
        ))}
    </div>
);

export default ForecastSummaries;