import React from "react";
import tenis1 from '../images/tenis1.jpg'; 

const ComprarTenis1 = () => {
    return (
        <div>
            <img src={tenis1} alt="Tênis 1" />
            <h3>DUNK LOW RETRO</h3>
            <p>R$ 639,99</p>
            <p>Adicionar ao Carrinho</p>
        </div>
    );
}

export default ComprarTenis1;