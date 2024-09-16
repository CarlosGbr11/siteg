import feminino1 from '../images/feminino1.avif';
import './ComprarTenis.css';
import './Comentarios.css';

function ComprarFem() {
  return (
    <div className="comprar-container">
      <img src={feminino1} alt="fem1" className="tenis-img" />
      <h3 className="tenis-nome">DUNK LOW OG</h3>
      <p className="tenis-preco">R$ 589,99</p>
    </div>
  );
}

export default ComprarFem;