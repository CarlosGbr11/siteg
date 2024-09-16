import tenis1 from '../images/tenis1.jpg';
import './Comprar.css';

function ComprarTenis1() {
  return (
    <div className="comprar-container">
      <img src={tenis1} alt="Tênis 1" className="prod-img" />
      <h3 className="prod-nome">Dunk Low Viotech</h3>
      <p className="prod-preco">R$ 499,99</p>
    </div>
  );
}

export default ComprarTenis1;