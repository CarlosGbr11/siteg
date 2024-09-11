import React, { useState, useEffect } from "react";
import tenis6 from '../images/tenis6.jpg';  
import './ComprarTenis.css';  
import './Comentarios.css';

function ComprarTenis6() {
  
  return (
    <div className="comprar-container">
      <img src={tenis6} alt="Tênis 6" className="tenis-img" />
      <h3 className="tenis-nome">FORUM 84 LOW</h3>
      <p className="tenis-preco">R$ 579,99</p>

    </div>
  );
}

export default ComprarTenis6;
