import feminino1 from '../images/feminino1.avif';
import './Comprar.css';

function ComprarFem1() {
  return (
    <div className="comprar-container">
      <img src={feminino1} alt="fem1" className="prod-img" />
      <h3 className="prod-nome">Camiseta Flight Feminina</h3>
      <p className="prod-preco">R$ 79,99</p>
    </div>
  );
}

export default ComprarFem1;