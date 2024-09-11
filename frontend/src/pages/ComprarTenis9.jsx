import tenis9 from '../images/tenis9.jpg';  
import './ComprarTenis.css';  
import './Comentarios.css';

function ComprarTenis9() {
  
  return (
    <div className="comprar-container">
      <img src={tenis9} alt="Tênis 9" className="tenis-img" />
      <h3 className="tenis-nome">SUPERSTAR XLG</h3>
      <p className="tenis-preco">R$ 399,99</p>
      
    </div>
  );
}

export default ComprarTenis9;
