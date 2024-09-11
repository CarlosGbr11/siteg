import tenis1 from '../images/tenis1.jpg';
import './ComprarTenis.css';
import './Comentarios.css';

function ComprarTenis1() {
  return (
    <div className="comprar-container">
      <img src={tenis1} alt="Tênis 1" className="tenis-img" />
      <h3 className="tenis-nome">DUNK LOW OG</h3>
      <p className="tenis-preco">R$ 589,99</p>
    </div>
  );
}

export default ComprarTenis1;