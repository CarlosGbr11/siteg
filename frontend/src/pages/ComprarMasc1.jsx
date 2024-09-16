import masc1 from '../images/masc1.avif';
import './Comprar.css';

function ComprarMasc1() {
  return (
    <div className="comprar-container">
      <img src={masc1} alt="fem1" className="tenis-img" />
      <h3 className="tenis-nome">D</h3>
      <p className="tenis-preco">R$ 589,99</p>
    </div>
  );
}

export default ComprarMasc1;