// ComprarTenis9.jsx
import React, { useState, useEffect } from "react";
import tenis9 from '../images/tenis9.jpg';  
import './ComprarTenis.css';  
import './Comentarios.css';

function ComprarTenis9() {
  const [formValores, setFormValores] = useState({
    nome9: '',
    texto9: '',
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
      const url = editMode ? `http://localhost:3000/feed9/${selectedId}` : 'http://localhost:3000/feed9';

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

      setFormValores({ nome9: '', texto9: '' });
      setEditMode(false);
      setSelectedId(null);
      fetchData();

    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  const handleEdit = (id, nome9, texto9) => {
    setFormValores({ nome9, texto9 });
    setSelectedId(id);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/feed9/${id}`, {
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
      const response = await fetch('http://localhost:3000/feed9', {
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
      <img src={tenis9} alt="Tênis 9" className="tenis-img" />
      <h3 className="tenis-nome">SUPERSTAR XLG</h3>
      <p className="tenis-preco">R$ 399,99</p>

      <form onSubmit={handleSubmit} className="comentario-form">
        <label>
          Seu nome:
          <input type="text" name="nome9" value={formValores.nome9} onChange={handleChange} className="comentario-input" />
        </label>
        <label>
          Comentário:
          <input type="text" name="texto9" value={formValores.texto9} onChange={handleChange} className="comentario-input" />
        </label>
        <button type='submit' className="btn-comprar">{editMode ? 'Atualizar comentário' : 'Adicionar comentário'}</button>
      </form>
      
      <div className="read-container">
        <ol className="read-list">
          {consultaDados.map((linha, index) => (
            <li key={index} className="read-dados">
              <div className="dados">Nome: {linha.nome9}</div>
              <div className="dados">Feedback: {linha.texto9}</div>
              <button onClick={() => handleEdit(linha.idfeedback9, linha.nome9, linha.texto9)} className="btn-editar">Editar</button>
              <button onClick={() => handleDelete(linha.idfeedback9)} className="btn-deletar">Deletar</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ComprarTenis9;
