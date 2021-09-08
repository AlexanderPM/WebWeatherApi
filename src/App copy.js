import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from './img/free-icon-weather-app-3845731.png';
import Prediction from "./components/prediction";


const App = () => {

    const [city, setCity] = useState("Барнаул");
    const [clouds, setclouds] = useState("")
    const [temp, setTemp] = useState("")
    const [tempMin, setTempMin] = useState("")
    const [tempMax, setTempMax] = useState("")
    const [feelsLike, setFeelsLike] = useState("")
    const [humidity, setHumidity] = useState("")
    const [windSpeed, setWindSpeed] = useState("")
    const [weatherDescription, setWeatherDescription] = useState("")

    useEffect(() => {

        const getData = async () => {
            let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=ru&appid=5e7a8b9969b4a5b29a7e55a1539e1686"
            const result = await axios.get(url);
            console.log(result)

            setclouds(result.data.clouds.all)
            setCity(result.data.name)
            setTemp(result.data.main.temp)
            setFeelsLike(result.data.main.feels_like)
            setHumidity(result.data.main.humidity)

            setTempMin(result.data.main.temp_min)
            setTempMax(result.data.main.temp_max)

            setWindSpeed(result.data.wind.speed)
            setWeatherDescription(result.data.weather[0].description)

        };
        getData();
    }, [city])

    const setCityClick = (event) => {
        alert(event.target.innerText);
        setCity(event.target.innerText)
    }

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number, index) =>
  <button key={index} className="btn" onClick={(event) => setCityClick(event)}>{number}</button>
);

    return (
        <div className="wraper">
            <div className="header"></div>
            <div className="header-contener"></div>
            <div className="contener">
                <div className="logo">
                    <img src={logo} height="80px" width="80px" alt="Логотип" ></img>
                    <span className="logo-title"><strong>Good Weather</strong></span>
                </div>
                <div className="title"><h1>Погода сейчас, <span className="city-name">{city}</span></h1></div>
                <div className="widget">
                    <div className="item city"><strong>{city}</strong></div>
                    <div className="item temp"> <strong>{Math.round(temp * 10) / 10}&#176;</strong></div>
                    <div className="item emotion">Ощущается как <strong>&nbsp;{Math.round(feelsLike * 10) / 10}&#176;</strong></div>
                    <div className="item state">
                        <div className="item">{weatherDescription},</div>
                        <div className="item">облачность <strong>{clouds}%</strong></div>
                    </div>
                    <div className="item state">
                        <div className="item">Температура мин <strong>{Math.round(tempMin * 10) / 10}&#176;</strong></div>
                        <div className="item">Температура мак <strong>{Math.round(tempMax * 10) / 10}&#176;</strong></div>
                        <div className="item">Влажность <strong>{humidity}%</strong></div>
                        <div className="item">Скорость ветра <strong>{windSpeed} м/с </strong></div>
                    </div>
                </div>
                <div className="title"><h1>Погода на 7 дней</h1></div>
                <Prediction />
                <h3 className= "title-list-city">Погода в других населенных пунктах Алтайского края</h3>
                <div className="list-city">
                    <h4>Города Алтайского края краевого значения</h4>
                    <div className="list-city-item">
                        <button className="btn" onClick={(event) => setCityClick(event)}>Алейск</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Барнаул</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Белокуриха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Бийск</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Заринск</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Новоалтайск</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Рубцовск</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Славгород</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Яровое</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Горняк</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Змеиногорск</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Камень-на-Оби</button>
                    </div>
                    <h4>Города Алтайского края районного значения</h4>
                    <div className="list-city-item">
                        <button className="btn" onClick={(event) => setCityClick(event)}>Горняк</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Змеиногорск</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Камень-на-Оби</button>
                    </div>
                    <h4>Закрытое административно-территориальное образование (ЗАТО)</h4>
                    <div className="list-city-item">
                        <button className="btn" onClick={(event) => setCityClick(event)}>Зато Сибирский</button>
                    </div>
                    <h4>Села, деревни и рабочие посёлки Алтайского края</h4>
                    <div className="list-city-item">
                        <button className="btn" onClick={(event) => setCityClick(event)}>Алтайское</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Баево</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Благовещенка</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Бурла</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Быстрый Исток</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Волчиха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Егорьевское</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Ельцовка</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Завьялово</button>

                        <button className="btn" onClick={(event) => setCityClick(event)}>Залесово</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Зональное</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Калманка</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Ключи</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Косиха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Красногорское</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Краснощёково</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Крутиха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Кулунда</button>

                        <button className="btn" onClick={(event) => setCityClick(event)}>Курья</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Кытманово</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Мамонтово</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Михайловка</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Гальбштадт</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Новичиха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Павловск</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Панкрушиха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Первомайское</button>

                        <button className="btn" onClick={(event) => setCityClick(event)}>Петропавловское</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Поспелиха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Ребриха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Родино</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Романово</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Смоленское</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Советское</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Солонешное</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Солтон</button>

                        <button className="btn" onClick={(event) => setCityClick(event)}>Суетка</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Табуны</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Тальменка</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Тогул</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Топчиха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Троийкое</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Тюменцево</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Староалейское</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Угловское</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Усть-Пристань</button>

                        <button className="btn" onClick={(event) => setCityClick(event)}>Усть-Калманка</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Хабары</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Целинное</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Чарышское</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Шелаболиха</button>
                        <button className="btn" onClick={(event) => setCityClick(event)}>Шипуново</button>

                    </div>
                    {listItems}
                    
                </div>
            </div>
            <div className="footer">
                "Это футер, детка!"
                <div>Автор иконок: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
    );
};

export default App;