import React from "react";
import './Anuncios.css'
import tenis1 from '../images/tenis1.jpg'; 
import tenis2 from '../images/tenis2.jpg'; 
import tenis3 from '../images/tenis3.jpg'; 
import tenis4 from '../images/tenis4.jpg'; 
import tenis5 from '../images/tenis5.jpg'; 
import tenis6 from '../images/tenis6.jpg'; 
import tenis7 from '../images/tenis7.jpg'; 
import tenis8 from '../images/tenis8.jpg'; 
import tenis9 from '../images/tenis9.jpg'; 


function Anuncios5() {
    return (
        <div className="anuncios-container">
            <a href="/comprar/tenis1" className="anuncio">
                <img src={tenis1} alt="Tênis 1" />
                <h3>DUNK LOW OG</h3>
                <p>R$ 589,99</p>
            </a>
            <a href="/comprar/tenis2" className="anuncio">
                <img src={tenis2} alt="Tênis 2" />
                <h3>DUNK LOW RETRO</h3>
                <p>R$ 639,99</p>
            </a>
            <a href="/comprar/tenis3" className="anuncio">
                <img src={tenis3} alt="Tênis 3" />
                <h3>AIR FORCE 1 ´07 LV8</h3>
                <p>R$ 679,99</p>
            </a>
            <a href="/comprar/tenis4" className="anuncio">
                <img src={tenis4} alt="Tênis 4" />
                <h3>JORDAN 1 MID</h3>
                <p>R$ 839,99</p>
            </a>
            <a href="/comprar/tenis5" className="anuncio">
                <img src={tenis5} alt="Tênis 5" />
                <h3>STAN SMITH</h3>
                <p>R$ 339,99</p>
            </a>
            <a href="/comprar/tenis6" className="anuncio">
                <img src={tenis6} alt="Tênis 6" />
                <h3>FORUM 84 LOW</h3>
                <p>R$ 579,99</p>
            </a>
            <a href="/comprar/tenis7" className="anuncio">
                <img src={tenis7} alt="Tênis 7" />
                <h3>HANDBALL SPEZIAL</h3>
                <p>R$ 399,99</p>
            </a>
            <a href="/comprar/tenis8" className="anuncio">
                <img src={tenis8} alt="Tênis 8" />
                <h3>ADI2000</h3>
                <p>R$ 799,99</p>
            </a>
            <a href="/comprar/tenis9" className="anuncio">
                <img src={tenis9} alt="Tênis 9" />
                <h3>SUPERSTAR XLG</h3>
                <p>R$ 399,99</p>
            </a>
        </div>
    );
}

export default Anuncios5;
