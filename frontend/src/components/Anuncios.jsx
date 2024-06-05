import React from "react";
import './Anuncios.css'
import tenis1 from '../images/tenis1.jpg'; 
import tenis2 from '../images/tenis2.jpg'; 
import tenis3 from '../images/tenis3.jpg'; 
import tenis4 from '../images/tenis4.jpg'; 

function Anuncios() {
    return (
        <div className="anuncios-container">
            <div className="anuncio">
                <img src={tenis1} alt="Tênis 1" />
                <h3>DUNK LOW OG</h3>
                <p>R$ 999,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis2} alt="Tênis 2" />
                <h3>DUNK LOW RETRO</h3>
                <p>R$ 999,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis3} alt="Tênis 3" />
                <h3>AIR FORCE 1 ´07 LV8</h3>
                <p>R$ 999,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis4} alt="Tênis 4" />
                <h3>JORDAN 1 MID</h3>
                <p>R$ 699,99</p>
            </div>
        </div>
    );
}

export default Anuncios;
