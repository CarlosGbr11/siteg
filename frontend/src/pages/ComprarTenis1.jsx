import React from "react";
import tenis1 from '../images/tenis1.jpg';
import './ComprarTenis.css'; 

const ComprarTenis1 = () => {
    return (
        <div className="comprar-container">
            <img src={tenis1} alt="Tênis 1" className="tenis-img" />
            <h3 className="tenis-nome">DUNK LOW RETRO</h3>
            <p className="tenis-preco">R$ 639,99</p>
            <button className="btn-comprar">Adicionar comentário</button>
        </div>
    );
}

export default ComprarTenis1;
