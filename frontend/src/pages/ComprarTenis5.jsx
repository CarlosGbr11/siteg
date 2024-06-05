import React from "react";
import tenis5 from '../images/tenis5.jpg'; 
import './ComprarTenis.css'; 


const ComprarTenis5 = () => {
    return (
        <div className="comprar-container">
            <img src={tenis5} alt="Tênis 5" className="tenis-img"/>
            <h3 className="tenis-nome">STAN SMITH</h3>
            <p className="tenis-preco">R$ 339,99</p>
            <button className="btn-comprar">Adicionar ao Carrinho</button>
        </div>
    );
}

export default ComprarTenis5;