import React, { useState, useEffect } from "react";
import tenis2 from '../images/tenis2.jpg';  
import './ComprarTenis.css';  
import './Comentarios.css';

function ComprarTenis2() {
  const [formValores, setFormValores] = useState({
    nome2: '',
    texto2: '',
  });
  const [consultaDados, setconsultaDados] = useState([]);

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
      const response = await fetch('http://localhost:3000/feed2', {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/feed2', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        setconsultaDados(data);
      } catch (err) {
        console.error("Erro ao buscar dados no banco", err);
      }
    };
    fetchData(); 
  }, []);

  return (
    <div className="comprar-container">
      <img src={tenis2} alt="Tênis 2" className="tenis-img" />
      <h3 className="tenis-nome">DUNK LOW RETRO</h3>
      <p className="tenis-preco">R$ 639,99</p>

      <form onSubmit={handleSubmit} className="comentario-form">
      <label>
          Seu nome:
          <input type="text" name="nome2" value={formValores.nome2} onChange={handleChange} className="comentario-input" />
        </label>
        <label>
          Comentário:
          <input type="text" name="texto2" value={formValores.texto2} onChange={handleChange} className="comentario-input" />
        </label>
        <button type='submit' className="btn-comprar">Adicionar comentário</button>
      </form>
      
      <div className="read-container">
        <ol className="read-list">
          {consultaDados.map((linha, index) => (
            <li key={index} className="read-dados">
              <div className="dados">Nome: {linha.nome2}</div>
              <div className="dados">Feedback: {linha.texto2}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ComprarTenis2;

