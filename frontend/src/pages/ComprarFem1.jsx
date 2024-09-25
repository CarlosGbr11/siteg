import { useState } from 'react';
import feminino1 from '../images/feminino1.avif';
import femininoj1 from '../images/femininoj1.avif';
import femininoj2 from '../images/femininoj2.avif';
import femininoj3 from '../images/femininoj3.avif';
import './Comprar.css';

function ComprarFem1() {
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
        <img src={feminino1} alt="Camiseta Flight Feminina" className="prod-img" />
        <img src={femininoj1} alt="Camiseta Flight Feminina" className="prod-img" />
        <img src={femininoj2} alt="Camiseta Flight Feminina" className="prod-img" />
        <img src={femininoj3} alt="Camiseta Flight Feminina" className="prod-img" />
      </div>
      <div className="prod-info">
        <h3 className="prod-nome">Camiseta Flight Feminina</h3>
        <p className="prod-preco">R$ 79,99</p>
        <p className="prod-descricao">
          Camiseta feminina com design moderno e confortável, perfeita para o seu dia a dia.
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

export default ComprarFem1;