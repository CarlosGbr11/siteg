import React from "react";
import './LinksFooter.css';
import elo from '../images/elo.png';
import master from '../images/mastercard.png';
import pix from '../images/pix.png';
import visa from '../images/visa.png';

const Ajuda = () => {
    return (
        <div className="suporte-container">
            <h2>Como comentar</h2>
            <p>
                <strong>Localize o Formulário de Comentários:</strong>
                Em cada página de produto ou de avaliação, haverá um formulário de comentários onde os usuários podem deixar suas opiniões. Esse formulário geralmente estará localizado abaixo das avaliações existentes.
            </p>
            <p>
                <strong>Clique no Campo de Comentário:</strong>
                Clique no campo de texto designado para deixar um comentário. Ele geralmente estará marcado com algo como "Deixe seu comentário aqui".
            </p>
            <p>
                <strong>Digite seu Comentário:</strong>
                Escreva seu comentário no campo de texto. Você pode compartilhar sua opinião sobre o calçado, detalhes sobre o ajuste, conforto, estilo, ou qualquer outra informação relevante que desejar compartilhar.
            </p>
            <p>
                <strong>Enviar o Comentário:</strong>
                Após escrever seu comentário e, se aplicável, selecionar uma classificação, clique no botão "Enviar", "Postar" ou similar para enviar seu comentário.
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