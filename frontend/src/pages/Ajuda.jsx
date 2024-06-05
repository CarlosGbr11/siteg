import React from "react";
import './LinksFooter.css';

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

            <h2>Resolução de problemas</h2>
            <p>
                <strong>Limpe o Cache do Navegador:</strong>
                Às vezes, problemas de exibição ou funcionalidade podem ser causados por arquivos em cache. Limpar o cache do seu navegador pode resolver esses problemas.
            </p>
            <p>
                <strong>Atualize seu Navegador:</strong>
                Certifique-se de estar usando a versão mais recente do seu navegador. Atualizações frequentes podem corrigir bugs e melhorar a estabilidade.
            </p>
            <p>
                <strong>Verifique sua Conexão com a Internet:</strong>
                Problemas de conexão com a internet podem afetar a funcionalidade do site. Certifique-se de estar conectado a uma rede estável e tente atualizar a página.
            </p>
        </div>
    )
}
export default Ajuda;