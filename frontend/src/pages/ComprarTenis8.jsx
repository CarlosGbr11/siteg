import React from "react";
import tenis8 from '../images/tenis8.jpg'; 


const ComprarTenis8 = () => {
    return (
        <div>
            <img src={tenis8} alt="Tênis 8" />
            <h3>ADI2000</h3>
            <p>R$ 799,99</p>
            <p>Adicionar ao Carrinho</p>
        </div>
    );
}

export default ComprarTenis8;