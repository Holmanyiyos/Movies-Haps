import React from 'react';
import './styles/Footer.css'

function Footer(){
    return(
        <div className="container__footer">
            <div className="left">
                <p>This project was create with React.js <img src="https://image.flaticon.com/icons/png/512/1260/1260775.png" alt="logo react" /></p>
                <p>By: Holman Plazas</p>
            </div>
            <div className="right">
                <img src="https://image.flaticon.com/icons/png/512/733/733609.png" alt="Github" />
                <img src="https://image.flaticon.com/icons/png/512/1384/1384017.png" alt="Twitter" />
                <img src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="Linkedin" />
            </div>
        </div>
    )
}

export default Footer;