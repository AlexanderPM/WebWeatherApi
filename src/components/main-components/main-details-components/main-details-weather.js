import React from "react";
import "./main-details-weather.css";

const Current = (props) => {

    return (
        <div className="main-detail_weather_image">
            <div className="main-detail_weather_block">
                <div className="main-detail_weather_block_item-city"><strong>{props.city}</strong></div>
                <div className="main-detail_weather_block_widget">
                    <div className="main-detail_weather_block_widget_info">
                        <div className="main-detail_weather_block_widget_info_icon">
                            <img src={`https://openweathermap.org/img/wn/${props.img}@2x.png`} alt="icon" width="160px" height="160px"></img>
                            <div className="main-detail_weather_block_widget_info_icon_temp"> <strong>{props.temp}&#176;</strong></div>
                        </div>
                        <div className="main-detail_weather_block_widget_info_emotion">Ощущается как <strong>&nbsp;{props.emotion}&#176;</strong></div>
                        <div className="main-detail_weather_block_widget_info_weather">{props.description}</div>
                    </div>
                    <div className="main-detail_weather_block_widget_detail">
                        <div className="main-detail_weather_block_widget_detail_item">Давление &nbsp;<strong>{props.pressure} мм рт. ст.&nbsp;</strong></div>
                        <div className="main-detail_weather_block_widget_detail_item">Влажность &nbsp;<strong>{props.humidity}%&nbsp;</strong></div>
                        <div className="main-detail_weather_block_widget_detail_item">УФ индекс &nbsp;<strong>{props.uvi} &nbsp;</strong></div>
                        <div className="main-detail_weather_block_widget_detail_item">Скорость ветра &nbsp;<strong>{props.wind_speed} м/с {props.wind_deg} &nbsp;</strong></div>
                        <div className="main-detail_weather_block_widget_detail_item">Облачность &nbsp;<strong>{props.clouds}%&nbsp;</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Current;