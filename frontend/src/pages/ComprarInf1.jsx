import { useState } from 'react';
import inf1 from '../images/inf1.avif';
import inf1n from '../images/inf1n.avif'; 
import inf2n from '../images/inf2n.avif';
import inf3n from '../images/inf3n.avif';
import './Comprar.css';

function ComprarInf1() {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      alert(`Tamanho ${selectedSize} adicionado ao carrinho!`);
    } else {
      alert('Por favor, selecione um tamanho.');
    }
  };

  return (
    <div className="comprar-container">
      <div className="img-gallery">
        <img src={inf1} alt="Camiseta Sports Infantil" className="prod-img" />
        <img src={inf1n} alt="Camiseta Sports Infantil 1" className="prod-img" />
        <img src={inf2n} alt="Camiseta Sports Infantil 2" className="prod-img" />
        <img src={inf3n} alt="Camiseta Sports Infantil 2" className="prod-img" />
      </div>
      <div className="prod-info">
        <h3 className="prod-nome">Camiseta Sports Infantil</h3>
        <p className="prod-preco">R$ 79,99</p>
        <p className="prod-descricao">
          Camiseta infantil esportiva, perfeita para as brincadeiras e atividades dos pequenos, oferecendo conforto e estilo.
        </p>

        <div className="size-selector">
          <p>Selecione o tamanho:</p>
          <div className="sizes">
            {['P', 'M', 'G', 'GG'].map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ComprarInf1;
