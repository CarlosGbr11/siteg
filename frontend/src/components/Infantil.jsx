import './Infantil.css';
import Anuncios4 from "./Anuncios4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Infantil = () => {
    return (
        <div className='infantil'>
            <div className="header">
                <h1>Infantil</h1>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                </div>
            </div>
            <p>
                Descubra nossa encantadora coleção de roupas infantis, onde conforto e diversão andam de mãos dadas. 
                Cada peça foi pensada para acompanhar o dia a dia das crianças com estilo e qualidade. Nossas roupas 
                combinam cores vibrantes, estampas divertidas e tecidos macios, perfeitos para explorar o mundo com liberdade e alegria.
            </p>
            <Anuncios4 />
        </div>
    );
};

export default Infantil;
