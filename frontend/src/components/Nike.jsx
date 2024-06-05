import React from "react";
import './Anuncios.css'
import tenis1 from '../images/tenis1.jpg'; 
import tenis2 from '../images/tenis2.jpg'; 
import tenis3 from '../images/tenis3.jpg'; 
import tenis4 from '../images/tenis4.jpg'; 
import nike1 from '../images/nike1.jpg'; 
import nike2 from '../images/nike2.jpg'; 
import nike3 from '../images/nike3.jpg'; 
import nike4 from '../images/nike4.jpg'; 
import nike5 from '../images/nike5.jpg'; 


function Anuncios() {
    return (
        <div className="anuncios-container">
            <div className="anuncio">
                <img src={tenis1} alt="Tênis 1" />
                <h3>DUNK LOW OG</h3>
                <p>R$ 589,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis2} alt="Tênis 2" />
                <h3>DUNK LOW RETRO</h3>
                <p>R$ 639,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis3} alt="Tênis 3" />
                <h3>AIR FORCE 1 ´07 LV8</h3>
                <p>R$ 679,99</p>
            </div>
            <div className="anuncio">
                <img src={tenis4} alt="Tênis 4" />
                <h3>JORDAN 1 MID</h3>
                <p>R$ 839,99</p>
            </div>
            <div className="anuncio">
                <img src={nike1} alt="nike 1" />
                <h3>AIR MAX 90</h3>
                <p>R$ 699,99</p>
            </div>
            <div className="anuncio">
                <img src={nike2} alt="nike 2" />
                <h3>CORTEZ SE</h3>
                <p>R$ 579,99</p>
            </div>
            <div className="anuncio">
                <img src={nike3} alt="nike 3" />
                <h3>DUNK LOW REMASTERED</h3>
                <p>R$ 999,99</p>
            </div>
            <div className="anuncio">
                <img src={nike4} alt="nike 4" />
                <h3>ZOOM VOMERO 5 SP</h3>
                <p>R$ 809,99</p>
            </div>
            <div className="anuncio">
                <img src={nike5} alt="nike 5" />
                <h3>JA 1 CNY</h3>
                <p>R$ 899,99</p>
            </div>
        </div>
    );
}

export default Anuncios;
