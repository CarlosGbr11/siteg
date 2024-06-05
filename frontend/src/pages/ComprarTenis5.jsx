import React from "react";
import tenis5 from '../images/tenis5.jpg'; 


const ComprarTenis5 = () => {
    return (
        <div>
            <img src={tenis5} alt="Tênis 5" />
            <h3>STAN SMITH</h3>
            <p>R$ 339,99</p>
            <p>Adicionar ao Carrinho</p>
        </div>
    );
}

export default ComprarTenis5;