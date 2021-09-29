import React from "react";
import "./main-alerts.css";

const Alerts = (props) => {

    const isCyrillic = function (text) {
        return /[а-я]/i.test(text);
    }

    const arr = [];
    if (typeof props.stateAlerts !== 'undefined') {
        for (let i = 0; i < props.stateAlerts.length; i++) {
            if (isCyrillic(props.stateAlerts[i].event)) {
                arr.push(props.stateAlerts[i])
            }
        }
    }

    const renderAlerts = arr.map((element, index) =>
        <div key={index}><strong>{props.dataTimeConverter(element.start, "date_number")}</strong>. {element.event}, {element.description} </div>
    );

    return (
        <div className="main-message">
            {renderAlerts}
        </div>
    );
}

export default Alerts;