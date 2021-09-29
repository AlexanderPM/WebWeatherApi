import React from "react";
import './header.css';

const Header = (props) => {

    const setCity = (value) => {

        let coordinaty =
            [
                "lat=52.4978&lon=82.7777",
                "lat=53.3606&lon=83.7636",
                "lat=52.5404&lon=85.2184",
                "lat=51.9994&lon=84.9933",
                "lat=53.7074&lon=84.9367",
                "lat=53.7889&lon=81.3257",
                "lat=53.4138&lon=83.9416",
                "lat=51.5215&lon=81.2139",
                "lat=53.0016&lon=78.6481"
            ];

        switch (value) {
            case 'Алейск':
                props.setCoordinaty(coordinaty[0]);
                props.setCity("Алейск");
                break;
            case 'Барнаул':
                props.setCoordinaty(coordinaty[1]);
                props.setCity("Барнаул");
                break;
            case 'Бийск':
                props.setCoordinaty(coordinaty[2]);
                props.setCity("Бийск");
                break;
            case 'Белокуриха':
                props.setCoordinaty(coordinaty[3]);
                props.setCity("Белокуриха");
                break;
            case 'Заринск':
                props.setCoordinaty(coordinaty[4]);
                props.setCity("Заринск");
                break;
            case 'Камень-на-Оби':
                props.setCoordinaty(coordinaty[5]);
                props.setCity("Камень-на-Оби");
                break;
            case 'Новоалтайск':
                props.setCoordinaty(coordinaty[6]);
                props.setCity("Новоалтайск");
                break;
            case 'Рубцовск':
                props.setCoordinaty(coordinaty[7]);
                props.setCity("Рубцовск");
                break;
            case 'Славгород':
                props.setCoordinaty(coordinaty[8]);
                props.setCity("Славгород");
                break;
            default:
                break;
        }
    }

    const select =
        <select className="header-select" onChange={(event) => setCity(event.target.value)} defaultValue="Барнаул">
            <option value="Алейск">Алейск</option>
            <option value="Барнаул">Барнаул</option>
            <option value="Бийск">Бийск</option>
            <option value="Белокуриха">Белокуриха</option>
            <option value="Заринск">Заринск</option>
            <option value="Камень-на-Оби">Камень-на-Оби</option>
            <option value="Новоалтайск">Новоалтайск</option>
            <option value="Рубцовск">Рубцовск</option>
            <option value="Славгород">Славгород</option>
        </select>

    return (
        <div className="header-area">
            <div className="header-area_header">
                <span className="header-area_header_region">населенный пункт: <strong>{select}</strong></span>
            </div>
            <div className="header-area_header-contener"></div>
            <div className="header-area_header-contener-menu"></div>
        </div>
    );
}

export default Header;