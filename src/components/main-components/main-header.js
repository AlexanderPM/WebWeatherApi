import React from "react";
import logo from './../../img/icon-umbrella.png';
import './main-header.css';

const MainHeader = (props) => {


    return (
        <div className="main-contener_header">
            <div className="main-contener_header_logo">
                <img src={logo} height="60px" width="60px" alt="Логотип" ></img>
                <span className="main-contener_header_logo_title-one"><strong>Good <span className="main-contener_header_logo_title-two">Погода</span></strong></span>
            </div>
            <div className="main-contener_header_date-now"><strong>{props.city + ', ' + props.dataTimeConverter(props.dt, 'date_full')}</strong></div>
        </div>
    );
}

export default MainHeader;