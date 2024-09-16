import feminino1 from '../images/feminino1.avif';

function ComprarFem() {
  return (
    <div className="comprar-container">
      <img src={feminino1} alt="fem1" className="tenis-img" />
      <h3 className="tenis-nome">D</h3>
      <p className="tenis-preco">R$ 589,99</p>
    </div>
  );
}

export default ComprarFem;