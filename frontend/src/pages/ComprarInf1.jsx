import inf1 from '../images/inf1.avif';
import './Comprar.css';

function ComprarInf1() {
  return (
    <div className="comprar-container">
      <img src={inf1} alt="inf1" className="prod-img" />
      <h3 className="prod-nome">Camiseta Sports Infantil</h3>
      <p className="prod-preco">R$ 79,99</p>
    </div>
  );
}

export default ComprarInf1;