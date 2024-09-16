import inf1 from '../images/inf1.avif';
import './Comprar.css';

function ComprarInf1() {
  return (
    <div className="comprar-container">
      <img src={inf1} alt="fem1" className="prod-img" />
      <h3 className="prod-nome">D</h3>
      <p className="prod-preco">R$ 589,99</p>
    </div>
  );
}

export default ComprarInf1;