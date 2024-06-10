import React, { useState, useEffect } from "react";
import tenis6 from '../images/tenis6.jpg';  
import './ComprarTenis.css';  
import './Comentarios.css';

function ComprarTenis6() {
  const [formValores, setFormValores] = useState({
    nome6: '',
    texto6: '',
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
      const url = editMode ? `http://localhost:3000/feed6/${selectedId}` : 'http://localhost:3000/feed6';

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

      setFormValores({ nome6: '', texto6: '' });
      setEditMode(false);
      setSelectedId(null);
      fetchData();

    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  const handleEdit = (id, nome6, texto6) => {
    setFormValores({ nome6, texto6 });
    setSelectedId(id);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/feed6/${id}`, {
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
      const response = await fetch('http://localhost:3000/feed6', {
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
      <img src={tenis6} alt="Tênis 6" className="tenis-img" />
      <h3 className="tenis-nome">FORUM 84 LOW</h3>
      <p className="tenis-preco">R$ 579,99</p>

      <form onSubmit={handleSubmit} className="comentario-form">
        <label>
          Seu nome:
          <input type="text" name="nome6" value={formValores.nome6} onChange={handleChange} className="comentario-input" />
        </label>
        <label>
          Comentário:
          <input type="text" name="texto6" value={formValores.texto6} onChange={handleChange} className="comentario-input" />
        </label>
        <button type='submit' className="btn-comprar">{editMode ? 'Responder comentário' : 'Adicionar comentário'}</button>
      </form>
      
      <div className="read-container">
        <ol className="read-list">
          {consultaDados.map((linha, index) => (
            <li key={index} className="read-dados">
              <div className="dados">Nome: {linha.nome6}</div>
              <div className="dados">Feedback: {linha.texto6}</div>
              <button onClick={() => handleEdit(linha.idfeedback6, linha.nome6, linha.texto6)} className="btn-editar">Editar</button>
              <button onClick={() => handleDelete(linha.idfeedback6)} className="btn-deletar">Deletar</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ComprarTenis6;
