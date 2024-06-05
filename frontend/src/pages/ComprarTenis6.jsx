import React from "react";
import tenis6 from '../images/tenis6.jpg'; 
import './ComprarTenis.css'; 


const ComprarTenis6 = () => {
    return (
        <div className="comprar-container">
            <img src={tenis6} alt="Tênis 6" className="tenis-img"/>
            <h3 className="tenis-nome">FORUM 84 LOW</h3>
            <p className="tenis-preco">R$ 579,99</p>
            <button className="btn-comprar">Adicionar comentário</button>
        </div>
    );
}

export default ComprarTenis6;