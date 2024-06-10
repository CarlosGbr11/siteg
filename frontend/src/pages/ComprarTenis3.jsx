import React, { useState, useEffect } from "react";
import tenis3 from '../images/tenis3.jpg';
import './ComprarTenis.css';
import './Comentarios.css';

function ComprarTenis3() {
  const [formValores, setFormValores] = useState({
    nome3: '',
    texto3: '',
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
      const url = editMode ? `http://localhost:3000/feed3/${selectedId}` : 'http://localhost:3000/feed3';

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

      setFormValores({ nome3: '', texto3: '' });
      setEditMode(false);
      setSelectedId(null);
      fetchData();

    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  const handleEdit = (id, nome3, texto3) => {
    setFormValores({ nome3, texto3 });
    setSelectedId(id);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/feed3/${id}`, {
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
      const response = await fetch('http://localhost:3000/feed3', {
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
      <img src={tenis3} alt="Tênis 3" className="tenis-img" />
      <h3 className="tenis-nome">AIR FORCE 1 ´07 LV8</h3>
      <p className="tenis-preco">R$ 679,99</p>

      <form onSubmit={handleSubmit} className="comentario-form">
        <label>
          Seu nome:
          <input type="text" name="nome3" value={formValores.nome3} onChange={handleChange} className="comentario-input" />
        </label>
        <label>
          Comentário:
          <input type="text" name="texto3" value={formValores.texto3} onChange={handleChange} className="comentario-input" />
        </label>
        <button type='submit' className="btn-comprar">{editMode ? 'Responder comentário' : 'Adicionar comentário'}</button>
      </form>
      
      <div className="read-container">
        <ol className="read-list">
          {consultaDados.map((linha, index) => (
            <li key={index} className="read-dados">
              <div className="dados">Nome: {linha.nome3}</div>
              <div className="dados">Feedback: {linha.texto3}</div>
              <button onClick={() => handleEdit(linha.idfeedback3, linha.nome3, linha.texto3)} className="btn-editar">Editar</button>
              <button onClick={() => handleDelete(linha.idfeedback3)} className="btn-deletar">Deletar</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ComprarTenis3;