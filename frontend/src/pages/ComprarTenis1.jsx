import React, { useState } from 'react';
import tenis1 from '../images/tenis1.jpg';  
import './ComprarTenis.css';  

function ComprarTenis1() {
  const [formValores, setFormValores] = useState({
    texto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Dados a serem enviados: ", formValores);
      const response = await fetch('http://localhost:3000/feed', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });

      const json = await response.json();
      console.log(response);
      console.log(json);

    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  return (
    <div className="comprar-container">
      <img src={tenis1} alt="Tênis 1" className="tenis-img" />
      <h3 className="tenis-nome">DUNK LOW OG</h3>
      <p className="tenis-preco">R$ 589,99</p>

      <form onSubmit={handleSubmit} className="comentario-form">
        <label>
          Comentário:
          <input type="text" name="texto" value={formValores.texto} onChange={handleChange} className="comentario-input" />
        </label>
        <button type='submit' className="btn-comprar">Adicionar comentário</button>
      </form>
    </div>
  );
}

export default ComprarTenis1;
