import React from "react";
import tenis7 from '../images/tenis7.jpg'; 
import './ComprarTenis.css'; 


const ComprarTenis7 = () => {
    return (
        <div className="comprar-container">
            <img src={tenis7} alt="Tênis 7" className="tenis-img"/>
            <h3 className="tenis-nome">HANDBALL SPEZIAL</h3>
            <p className="tenis-preco">R$ 399,99</p>
            <button className="btn-comprar">Adicionar ao Carrinho</button>
        </div>
    );
}

export default ComprarTenis7;