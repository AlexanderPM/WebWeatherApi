import React from "react";
import './footer.css';

const Footer = () => {

    let nowYear = new Date();

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content_site-info">
                    <div className="footer-content_site-info_author"> Разработчик:</div>
                    <div className="footer-content_site-info_author-name"> Alexander Pohozhalov</div>
                    <div className="footer-content_site-info_year">2021 - {nowYear.getFullYear()}г.</div>
                </div>
                <div className="footer-content_icon">Автор иконок: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
    );
}

export default Footer;