import React from 'react';
import PropTypes from "prop-types";
import Weathericon from "react-icons-weather"

function ForecastSummary({ date, temperature, description, icon, onSelect }) {

    const formattedDate = new Date(date).toDateString()

    return (
        <div className="forecast-summary">
            <div className="forecast-summary__date">
                {formattedDate}
            </div>
            <div className="forecast-summary__icon" data-testid="forecast-icon">
                <Weathericon name="owm" iconId={icon} />
            </div>
            <div className="forecast-summary__temperature">
                {temperature.max}
                &deg;C
            </div>
            <div className="forecast-summary__description">
                {description}
            </div>
            <button type="button" onClick={() => onSelect(date)}>
                More details
            </button>
        </div>
    );
};

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number
    }).isRequired
}

export default ForecastSummary;