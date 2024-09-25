import { useState } from 'react';
import tenis1 from '../images/tenis1.jpg';
import tenisv1 from '../images/tenisv1.jpg';
import tenisv2 from '../images/tenisv2.jpg';
import tenisv3 from '../images/tenisv3.jpg';
import './Comprar.css';

function ComprarTenis1() {
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
        <img src={tenis1} alt="Tênis Dunk Low Viotech" className="prod-img" />
        <img src={tenisv1} alt="Tênis Dunk Low Viotech 1" className="prod-img" />
        <img src={tenisv2} alt="Tênis Dunk Low Viotech 2" className="prod-img" />
        <img src={tenisv3} alt="Tênis Dunk Low Viotech 3" className="prod-img" />
      </div>
      <div className="prod-info">
        <h3 className="prod-nome">Dunk Low Viotech</h3>
        <p className="prod-preco">R$ 499,99</p>
        <p className="prod-descricao">Reconhecendo as raízes do Dunk como o tênis de time universitário de primeira linha, a coleção "Be True To Your School" busca inspiração na campanha publicitária original. As cores representam as melhores universidades, enquanto o couro fresco tem a quantidade perfeita de brilho para torná-los uma vitória fácil. Então, amarre e mostre o espírito universitário. Tá no jogo?</p>

        <div className="size-selector">
          <p>Selecione o tamanho:</p>
          <div className="sizes">
            {['38', '39', '40', '41', '42', '43', '44'].map((size) => (
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

export default ComprarTenis1;
