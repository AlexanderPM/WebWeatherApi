import React from "react";
import Prediction from "./main-components/main-prediction";
import Alerts from "./main-components/main-alerts";
import Hourly from "./main-components/main-hourly";
import MainHeader from "./main-components/main-header";
import Nav from "./main-components/main-nav";
import './main.css'
import MainDetails from "./main-components/main-details";

const Main = (props) => {

    return (
        <div className="main-contener">
            <MainHeader dt={props.state.current.dt} dataTimeConverter={props.dataTimeConverter} city={props.city}/>
            <Nav daily={props.state.daily} daySet={props.daySet} dataTimeConverter={props.dataTimeConverter} setRenderCurrentWeather = {props.setRenderCurrentWeather }/>
            <MainDetails
                state={props.state}
                activeState={props.activeState}
                city={props.city}
                renderCurrentWeather = {props.renderCurrentWeather}
                dataTimeConverter={props.dataTimeConverter}
            />
            <div className="main-title"><h1>Погода на 7 дней</h1></div>
            <Prediction stateDaily={props.state.daily} daySet={props.daySet} dataTimeConverter={props.dataTimeConverter} />
            <div className="main-title"><h1>Почасовой прогноз погоды</h1></div>
            <Hourly stateHourly={props.state.hourly} dataTimeConverter={props.dataTimeConverter} />
            <div className="main-title"><h1>Предупреждения</h1></div>
            <Alerts stateAlerts={props.state.alerts} dataTimeConverter={props.dataTimeConverter} />
        </div>
    );
}
export default Main;