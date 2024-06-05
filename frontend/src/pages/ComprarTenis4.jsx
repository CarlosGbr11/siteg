import React from "react";
import tenis4 from '../images/tenis4.jpg'; 


const ComprarTenis4 = () => {
    return (
        <div>
            <img src={tenis4} alt="Tênis 4" />
            <h3>JORDAN 1 MID</h3>
            <p>R$ 839,99</p>
            <p>Adicionar ao Carrinho</p>
        </div>
    );
}

export default ComprarTenis4;