import React from "react";
import "./main-prediction.css";

const Prediction = (props) => {

        const renderDaysPrediction = props.stateDaily.map((element, index) =>
            <div key={index} className="main-prediction_contener-element" onClick={() => props.daySet(index)}>
                <div className="main-prediction_contener-element_date"><strong>{props.dataTimeConverter(element.dt, "date_short")}</strong></div>
                <div className="main-prediction_contener-element_icon"><img src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} alt="icon"></img></div>
                <div className="main-prediction_contener-element_description">{element.weather[0].description}</div>
                <div className="main-prediction_contener-element_temp">утро <strong>{element.temp.morn.toFixed(1)}&#176;</strong></div>
                <div className="main-prediction_contener-element_temp">день <strong>{element.temp.day.toFixed(1)}&#176;</strong></div>
                <div className="main-prediction_contener-element_temp">ночь <strong>{element.temp.day.toFixed(1)}&#176;</strong></div>
            </div>
        );
        return (    
            <div className="main-prediction">
                {renderDaysPrediction}
            </div>
        );
}

export default Prediction;