import tenis4 from '../images/tenis4.jpg';
import './ComprarTenis.css';
import './Comentarios.css';

function ComprarTenis4() {
 
  return (
    <div className="comprar-container">
      <img src={tenis4} alt="Tênis 4" className="tenis-img" />
      <h3 className="tenis-nome">JORDAN 1 MID</h3>
      <p className="tenis-preco">R$ 839,99</p>
    </div>
  );
}

export default ComprarTenis4;
