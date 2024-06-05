import React from "react";
import tenis3 from '../images/tenis3.jpg'; 
import './ComprarTenis.css'; 


const ComprarTenis3 = () => {
    return (
        <div className="comprar-container">
            <img src={tenis3} alt="Tênis 3" className="tenis-img"/>
            <h3 className="tenis-nome">AIR FORCE 1 ´07 LV8</h3>
            <p className="tenis-preco">R$ 679,99</p>
            <button className="btn-comprar">Adicionar comentário</button>
        </div>
    );
}

export default ComprarTenis3;