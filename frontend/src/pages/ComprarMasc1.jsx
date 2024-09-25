import { useState } from 'react';
import masc1 from '../images/masc1.avif';
import masc1n from '../images/masc1n.avif'; 
import masc2n from '../images/masc2n.avif';
import masc3n from '../images/masc3n.avif';
import './Comprar.css';

function ComprarMasc1() {
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
        <img src={masc1} alt="Camiseta Sports Masculina" className="prod-img" />
        <img src={masc1n} alt="Camiseta Sports Masculina 1" className="prod-img" />
        <img src={masc2n} alt="Camiseta Sports Masculina 2" className="prod-img" />
        <img src={masc3n} alt="Camiseta Sports Masculina 2" className="prod-img" />
      </div>
      <div className="prod-info">
        <h3 className="prod-nome">Camiseta Sports Masculina</h3>
        <p className="prod-preco">R$ 79,99</p>
        <p className="prod-descricao">
          Camiseta masculina esportiva, ideal para suas atividades físicas e para o dia a dia, oferecendo conforto e estilo.
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

export default ComprarMasc1;