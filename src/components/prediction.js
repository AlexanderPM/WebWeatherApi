import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./prediction.css";

const Prediction = () => {

    const [state, setState] = useState("")


    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month;
        return time;
    }
    const getData = async () => {
        let url = "https://api.openweathermap.org/data/2.5/onecall?lat=53.3606&lon=83.7636&units=metric&lang=ru&appid=5e7a8b9969b4a5b29a7e55a1539e1686"
        const result = await axios.get(url);
        setState(result.data)
    };

    useEffect(() => {   
        getData()     
    }, []);

    console.log(state.daily)

    if (typeof state.daily !== 'undefined') {
        const renderArr = state.daily.map((element, index) =>
            <div key={index} className="contener-element">
                <div className="render-date"><strong>{timeConverter(element.dt)}</strong></div>
                <div className="render-icon"><img src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} alt="icon"></img></div>
                <div className="render-description">{element.weather[0].description}</div>
                <div className="render-temp">утро <strong>{element.temp.morn.toFixed(1)}&#176;</strong></div>
                <div className="render-temp">день <strong>{element.temp.day.toFixed(1)}&#176;</strong></div>
                <div className="render-temp">ночь <strong>{element.temp.day.toFixed(1)}&#176;</strong></div>
            </div>
        );
        return (
            
            <div className="wraper-prediction">
                {renderArr}
            </div>
        );
    }
    else {
        return (
            <div className="wraper-prediction">
                
                <div> Загрузка данных...</div>
            </div>
        );

    }
}

export default Prediction;