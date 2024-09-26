import './Mulher.css';
import Anuncios2 from "./Anuncios2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Mulher = () => {
    return (
        <div className='mulher'>
            <div className="header">
                <h1>MULHER</h1>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                </div>
            </div>
            <p>
                Aqui, você descobre uma seleção exclusiva de roupas femininas que realçam o seu estilo com as últimas tendências. 
                Cada peça é escolhida com atenção aos detalhes, priorizando conforto e elegância. Explore as marcas que melhor 
                refletem a sua personalidade e sinta a diferença de vestir qualidade e design.
            </p>
            <Anuncios2 />
        </div>
    );
};

export default Mulher;