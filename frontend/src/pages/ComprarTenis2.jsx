import React from "react";
import tenis2 from '../images/tenis2.jpg'; 
import './ComprarTenis.css'; 

const ComprarTenis2 = () => {
    return (
        <div className="comprar-container">
            <img src={tenis2} alt="Tênis 2" className="tenis-img"/>
            <h3 className="tenis-nome">DUNK LOW OG</h3>
            <p className="tenis-preco">R$ 589,99</p>
            <button className="btn-comprar">Adicionar ao Carrinho</button>
        </div>
    );
}

export default ComprarTenis2;
