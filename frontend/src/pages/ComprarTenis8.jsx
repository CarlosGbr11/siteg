import React from "react";
import tenis8 from '../images/tenis8.jpg'; 
import './ComprarTenis.css'; 


const ComprarTenis8 = () => {
    return (
        <div className="comprar-container">
            <img src={tenis8} alt="Tênis 8" className="tenis-img"/>
            <h3 className="tenis-nome">ADI2000</h3>
            <p className="tenis-preco">R$ 799,99</p>
            <button className="btn-comprar">Adicionar comentário</button>
        </div>
    );
}

export default ComprarTenis8;