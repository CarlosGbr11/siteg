import './Homem.css';
import Anuncios3 from "./Anuncios3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Homem = () => {
    return (
        <div className='homem'>
            <div className="header">
                <h1>HOMEM</h1>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                </div>
            </div>
            <p>
                Aqui, você encontra uma seleção exclusiva de roupas masculinas que elevam o seu estilo com as últimas tendências. 
                Cada peça é cuidadosamente escolhida para garantir conforto e sofisticação. Explore as marcas que combinam com sua personalidade 
                e experimente a diferença de vestir qualidade e design.
            </p>
            <Anuncios3 />
        </div>
    );
};

export default Homem;