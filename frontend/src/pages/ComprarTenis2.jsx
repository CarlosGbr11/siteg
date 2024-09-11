import tenis2 from '../images/tenis2.jpg';
import './ComprarTenis.css';
import './Comentarios.css';

function ComprarTenis2() {

  return (

    <div className="comprar-container">
      <img src={tenis2} alt="Tênis 2" className="tenis-img" />
      <h3 className="tenis-nome">DUNK LOW RETRO</h3>
      <p className="tenis-preco">R$ 639,99</p>

    </div>
  );
}

export default ComprarTenis2;