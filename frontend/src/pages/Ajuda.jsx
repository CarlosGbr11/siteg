import React from "react";
import './LinksFooter.css';
import elo from '../images/elo.png';
import master from '../images/mastercard.png';
import pix from '../images/pix.png';
import visa from '../images/visa.png';

const Ajuda = () => {
    return (
        <div className="suporte-container">
            <h2>Nosso Atendimento</h2>
            <p>
                Na Hype, estamos comprometidos em proporcionar uma experiência de compra excepcional para nossos clientes. Entendemos que um atendimento de qualidade é essencial para garantir a sua satisfação. Por isso, nossa equipe está sempre pronta para ajudar você em todas as etapas do processo de compra, desde a escolha do produto até o pós-venda.
            </p>

            <h2>Formas de pagamento</h2>
            <div className="formas-pagamento">
                <img src={elo} alt="elo" />
                <img src={master} alt="master" />
                <img src={pix} alt="pix" />
                <img src={visa} alt="visa" />
            </div>

        </div>
    )
}
export default Ajuda;