import React from "react";
import Sun from "./main-details-components/main-details-sun";
import Weather from "./main-details-components/main-details-weather";
import './main-details.css'

const MainDetails = (props) => {

    function uviIndex(uvi) {

        switch (uvi) {
            case uvi <= 2:
                return 'низкий';
            case uvi > 2 && uvi <= 5:
                return 'умеренный';
            case uvi > 5 && uvi <= 7:
                return 'высокий';
            case uvi > 7 && uvi <= 10:
                return 'очень высокий';
            case uvi > 10:
                return 'чрезмерный';
            default:
                return 'низкий';
        }
    }

    function windDeg(gradus) {

        if (gradus >= 0 && gradus <= 89) return 'СВ';

        if (gradus >= 90 && gradus <= 179) return 'ЮВ';

        if (gradus >= 180 && gradus <= 269) return 'ЮЗ';

        if (gradus >= 270 && gradus <= 359) return 'СЗ';

        return '';
    }
    if (props.renderCurrentWeather === true) {
        return (
            <div className="main-detail">
                <div className="main-detail_weather">
                    <div className="main-title"><h1>Погода на <span className="date-time">{props.dataTimeConverter(props.state.current.dt, 'date_time')}</span></h1></div>
                    <Weather
                        city={props.city}
                        img={props.state.current.weather[0].icon}
                        temp={Math.round(props.state.current.temp * 10) / 10}
                        emotion={Math.round(props.state.current.feels_like * 10) / 10}
                        description={props.state.current.weather[0].description}
                        pressure={props.state.current.pressure * 0.75}
                        humidity={props.state.current.humidity}
                        uvi={uviIndex(props.state.current.uvi)}
                        wind_speed={props.state.current.wind_speed}
                        wind_deg={windDeg(props.state.current.wind_deg)}
                        clouds={props.state.current.clouds}
                    />
                </div>
                <div className="main-detail_sun">
                    <div className="main-title"><h1>Восход и заход Солнца</h1></div>
                    <Sun
                        sunsetCurrent={props.state.current.sunset}
                        sunriseCurrent={props.state.current.sunrise}
                        dt={props.state.current.dt}
                        dataTimeConverter={props.dataTimeConverter}
                    />
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="main-detail">
                <div className="main-detail_weather">
                    <div className="main-title"><h1>Погода на <span className="date-time">{props.dataTimeConverter(props.activeState.dt, 'date_full')}</span></h1></div>
                    <Weather
                        city={props.city}
                        img={props.activeState.weather[0].icon}
                        temp={Math.round(props.activeState.temp.day * 10) / 10}
                        emotion={Math.round(props.activeState.feels_like.day * 10) / 10}
                        description={props.activeState.weather[0].description}
                        pressure={props.activeState.pressure * 0.75}
                        humidity={props.activeState.humidity}
                        uvi={uviIndex(props.activeState.uvi)}
                        wind_speed={props.activeState.wind_speed}
                        wind_deg={windDeg(props.activeState.wind_deg)}
                        clouds={props.activeState.clouds}
                    />
                </div>
                <div className="main-detail_sun">
                    <div className="main-title"><h1>Восход и заход Солнца</h1></div>
                    <Sun
                        sunsetCurrent={props.activeState.sunset}
                        sunriseCurrent={props.activeState.sunrise}
                        dt={props.activeState.dt}
                        dataTimeConverter={props.dataTimeConverter}
                    />
                </div>
            </div>
        );
    }
}

export default MainDetails;