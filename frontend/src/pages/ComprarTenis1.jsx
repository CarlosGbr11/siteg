import React, { useState, useEffect } from "react";
import tenis1 from '../images/tenis1.jpg';
import './ComprarTenis.css';
import './Comentarios.css';

function ComprarTenis1() {
  const [formValores, setFormValores] = useState({
    nome: '',
    texto: '',
  });
  const [consultaDados, setconsultaDados] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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
      const method = editMode ? 'PUT' : 'POST';
      const url = editMode ? `http://localhost:3000/feed/${selectedId}` : 'http://localhost:3000/feed';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }

      setFormValores({ nome: '', texto: '' });
      setEditMode(false);
      setSelectedId(null);
      fetchData();

    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  const handleEdit = (id, nome, texto) => {
    setFormValores({ nome, texto });
    setSelectedId(id);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/feed/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar os dados');
      }

      fetchData();
    } catch (err) {
      console.error("Erro ao deletar", err);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/feed', {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="comprar-container">
      <img src={tenis1} alt="Tênis 1" className="tenis-img" />
      <h3 className="tenis-nome">DUNK LOW OG</h3>
      <p className="tenis-preco">R$ 589,99</p>

      <form onSubmit={handleSubmit} className="comentario-form">
        <label>
          Seu nome:
          <input type="text" name="nome" value={formValores.nome} onChange={handleChange} className="comentario-input" />
        </label>
        <label>
          Comentário:
          <input type="text" name="texto" value={formValores.texto} onChange={handleChange} className="comentario-input" />
        </label>
        <button type='submit' className="btn-comprar">{editMode ? 'Responder comentário' : 'Adicionar comentário'}</button>
      </form>
      
      <div className="read-container">
        <ol className="read-list">
          {consultaDados.map((linha, index) => (
            <li key={index} className="read-dados">
              <div className="dados">Nome: {linha.nome}</div>
              <div className="dados">Feedback: {linha.texto}</div>
              <button onClick={() => handleEdit(linha.idfeedback, linha.nome, linha.texto)} className="btn-editar">Responder</button>
              <button onClick={() => handleDelete(linha.idfeedback)} className="btn-deletar">Deletar</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ComprarTenis1;