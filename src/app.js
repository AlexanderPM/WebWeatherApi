import React from "react";
import { useState, useEffect } from "react";
import "./app.css";
import axios from "axios";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import { dataTimeConverter } from "./functions"

const App = () => {

    const [state, setState] = useState("")
    const [activeState, setActiveState] = useState("")
    const [renderCurrentWeather, setRenderCurrentWeather] = useState(true)
    const [coordinaty, setCoordinaty] = useState("lat=53.3606&lon=83.7636");
    const [city, setCity] = useState("Барнаул");

    const getData = async (coordinatyValue) => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?${coordinatyValue}&units=metric&lang=ru&appid=5e7a8b9969b4a5b29a7e55a1539e1686`
        const result = await axios.get(url);
        setActiveState(result.data.daily[0])
        setState(result.data)
    };

    useEffect(() => {
        getData(coordinaty)
    }, [coordinaty]);

    const daySet = (index) => {
        setRenderCurrentWeather(false);
        setActiveState(state.daily[index]);
    }

    if (typeof state.current !== 'undefined') {
        return (
            <div className="wraper">
                <Header setCoordinaty={setCoordinaty} setCity={setCity} />
                <Main
                    state={state}
                    activeState={activeState}
                    city={city}
                    renderCurrentWeather={renderCurrentWeather}
                    daySet={daySet}
                    dataTimeConverter={dataTimeConverter}
                    setRenderCurrentWeather={setRenderCurrentWeather}
                />
                <Footer />
            </div>
        );
    }
    else {
        return (
            <div className="wraper">
                <div className="download">
                    <div className="fetchining"></div>
                    <div className="download_message">Загрузка данных о погоде...</div>
                </div>
            </div>
        );
    }
}

export default App;