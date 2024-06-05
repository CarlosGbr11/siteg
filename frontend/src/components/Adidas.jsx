import React from "react";
import './Anuncios.css'
import adidas1 from '../images/adidas1.jpg'; 
import adidas2 from '../images/adidas2.jpg'; 
import adidas3 from '../images/adidas3.jpg'; 
import adidas4 from '../images/adidas4.jpg'; 
import tenis5 from '../images/tenis5.jpg'; 
import tenis6 from '../images/tenis6.jpg'; 
import tenis7 from '../images/tenis7.jpg'; 
import tenis8 from '../images/tenis8.jpg'; 
import tenis9 from '../images/tenis9.jpg'; 


function Anuncios() {
    return (
        <div className="anuncios-container">
            <div className="anuncio">
                <img src={adidas1} alt="adidas 1" />
                <h3>CAMPUS 00S</h3>
                <p>R$ 699,99</p>
            </div>
            <div className="anuncio">
                <img src={adidas2} alt="adidas 2" />
                <h3>FORUM LOW CL</h3>
                <p>R$ 539,99</p>
            </div>
            <div className="anuncio">
                <img src={adidas3} alt="adidas 3" />
                <h3>OZWEEGO</h3>
                <p>R$ 449,99</p>
            </div>
            <div className="anuncio">
                <img src={adidas4} alt="adidas 4" />
                <h3>OZELIA</h3>
                <p>R$ 839,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis5} alt="Tênis 5" />
                <h3>STAN SMITH</h3>
                <p>R$ 339,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis6} alt="Tênis 6" />
                <h3>FORUM 84 LOW</h3>
                <p>R$ 579,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis7} alt="Tênis 7" />
                <h3>HANDBALL SPEZIAL</h3>
                <p>R$ 399,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis8} alt="Tênis 8" />
                <h3>ADI2000</h3>
                <p>R$ 799,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis9} alt="Tênis 9" />
                <h3>SUPERSTAR XLG</h3>
                <p>R$ 399,99</p>
            </div>
        </div>
    );
}

export default Anuncios;
