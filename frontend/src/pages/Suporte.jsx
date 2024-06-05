import React from "react";
import './LinksFooter.css';

const Suporte = () => {
    return (
        <div className="suporte-container">

            <h2>Politica de moderação</h2>
            <p>
                <strong>Respeito:</strong>
                Todos os comentários devem ser respeitosos. Comentários que contenham linguagem ofensiva, discriminatória, difamatória ou insultuosa serão removidos.
            </p>
            <p>
                <strong>Relevância:</strong>
                Os comentários devem ser relevantes para o produto em questão. Evite discussões que não estejam diretamente relacionadas ao calçado em avaliação.
            </p>
            <p>
                <strong>Conteúdo Original:</strong>
                Comentários devem ser baseados em experiências pessoais genuínas com o produto. Evite copiar e colar avaliações de outros sites ou fontes.
            </p>
            <p>
                <strong>Sem Spam:</strong>
                Comentários que sejam considerados spam, incluindo links não relacionados ou autopromoção, serão removidos.
            </p>

            <h2>Contato</h2>
            <p>
            <strong>Envie-nos um Email:</strong>
            Você também pode nos enviar um email para suporte@hype.com Nossa equipe de suporte está sempre pronta para ajudar!
            </p>

        </div>
    );
}

export default Suporte;