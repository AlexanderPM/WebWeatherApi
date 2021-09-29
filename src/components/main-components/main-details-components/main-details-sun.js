import React from "react";
import './main-details-sun.css'
import logoSun from './../../../img/sun.png';

const Sun = (props) => {

    return (
        <div className="main-detail_sun_block">
            <div className="main-detail_sun_block_date"><strong>{props.dataTimeConverter(props.dt, "date_full")} </strong></div>
            <div className="main-detail_sun_block_logo"><img src={logoSun} height="120px" width="120px" alt="Логотип"></img></div>
            <div className="main-detail_sun_block_contener">
                <div className="main-detail_sun_block_contener_sunrise">Восход <strong>{props.dataTimeConverter(props.sunriseCurrent, "time")} </strong></div>
                <div className="main-detail_sun_block_contener_sunset">Закат <strong>{props.dataTimeConverter(props.sunsetCurrent, "time")} </strong></div>
            </div>
        </div>
    );
}

export default Sun;