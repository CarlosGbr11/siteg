import './Calcados.css';
import Anuncios from "./Anuncios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Calcados = () => {
    return (
        <div className='calcados'>
            <div className="header">
                <h1>CALÇADOS</h1>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                </div>
            </div>
            <p>
                Aqui você encontra uma linda coleção de calçados. Escolha o seu e eleve o seu estilo com as últimas tendências. 
                Cada par foi selecionado com cuidado para garantir conforto e elegância. Encontre as melhores marcas que combinam com o seu estilo único, 
                e descubra o prazer de calçar qualidade e design. Seja para o dia a dia ou para uma ocasião especial, temos o par perfeito para você.
            </p>
            <Anuncios />
        </div>
    );
};

export default Calcados;
