import React from 'react';
import ForecastSummary from './ForecastSummary';
import '../styles/ForecastSummaries.css'

const ForecastSummaries = ({ forecasts, onForecastSelect }) => (
    <div className="forecast-summaries">
        {forecasts.map(forecast => (
            <ForecastSummary
                key={forecast.date}
                date={forecast.date}
                description={forecast.description}
                icon={forecast.icon}
                onSelect={onForecastSelect}
                temperature={forecast.temperature}
            />
        ))}
    </div>
);

export default ForecastSummaries;