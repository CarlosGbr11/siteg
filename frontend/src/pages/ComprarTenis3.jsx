import tenis3 from '../images/tenis3.jpg';
import './ComprarTenis.css';
import './Comentarios.css';

function ComprarTenis3() {
  
  return (
    <div className="comprar-container">
      <img src={tenis3} alt="Tênis 3" className="tenis-img" />
      <h3 className="tenis-nome">AIR FORCE 1 ´07 LV8</h3>
      <p className="tenis-preco">R$ 679,99</p>

    </div>
  );
}

export default ComprarTenis3;