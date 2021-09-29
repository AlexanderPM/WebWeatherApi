import React from "react";
import './main-nav.css';

const Nav = (props) => {

    const navList = props.daily.map((element, index) => (
        (index === 0)
            ? <button key={index} className="nav-button" onClick={() => props.daySet(index)}>Сегодня</button>
            : (index === 1)
                ? <button key={index} className="nav-button" onClick={() => props.daySet(index)}>Завтра</button>
                : <button key={index} className="nav-button" onClick={() => props.daySet(index)}>{props.dataTimeConverter(element.dt, 'date')}</button>
    ));

    return (
        <nav>
            <button className="nav-button" onClick = {() => props.setRenderCurrentWeather(true) }>Текущая погода</button>
            {navList}
        </nav>
    );
}

export default Nav;