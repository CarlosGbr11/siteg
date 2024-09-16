import masc1 from '../images/masc1.avif';
import './Comprar.css';

function ComprarMasc1() {
  return (
    <div className="comprar-container">
      <img src={masc1} alt="masc1" className="prod-img" />
      <h3 className="prod-nome">Camiseta Sports Masculina</h3>
      <p className="prod-preco">R$ 79,99</p>
    </div>
  );
}

export default ComprarMasc1;