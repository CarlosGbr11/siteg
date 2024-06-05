import React from "react";
import tenis9 from '../images/tenis9.jpg'; 


const ComprarTenis9 = () => {
    return (
        <div>
            <img src={tenis9} alt="Tênis 9" />
            <h3>SUPERSTAR XLG</h3>
            <p>R$ 399,99</p>
            <p>Adicionar ao Carrinho</p>
        </div>
    );
}

export default ComprarTenis9;