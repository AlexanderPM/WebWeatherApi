import React from "react";
import './main-hourly.css';
import SimpleSlider from "./main-hourly-components/slider";

const Hourly = (props) => {

        const renderHoyrlyPredictions = props.stateHourly.map((element, index) =>
            <div key={index} className="main-hourly_contener-element">
                <div className="main-hourly_contener-element_date"><strong>{props.dataTimeConverter(element.dt, "date_short")}</strong></div>
                <div className="main-hourly_contener-element_date-time"><strong>{props.dataTimeConverter(element.dt, "time")}</strong></div>
                <div className="main-hourly_contener-element_icon"><img src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} alt="icon"></img></div>
                <div className="main-hourly_contener-element_description">{element.weather[0].description}</div>
                <div className="main-hourly_contener-element_temp"> <strong>t&#176; {element.temp.toFixed(1)}&#176;</strong></div>
            </div>
        );

        return (
            <div className="main-hourly">
                <SimpleSlider renderHoyrlyPredictions={renderHoyrlyPredictions} />
            </div>
        );
}

export default Hourly;