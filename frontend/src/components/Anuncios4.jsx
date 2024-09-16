import React, { useState } from "react";
import './Anuncios.css'
import inf1 from '../images/inf1.avif'; 
import inf2 from '../images/inf2.avif'; 
import inf3 from '../images/inf3.avif'; 
import inf4 from '../images/inf4.avif'; 
import inf5 from '../images/inf5.avif'; 
import inf6 from '../images/inf6.avif'; 
import inf7 from '../images/inf7.avif'; 
import inf8 from '../images/inf8.avif'; 
import inf9 from '../images/inf9.avif'; 
import inf10 from '../images/inf10.avif'; 
import inf11 from '../images/inf11.avif'; 
import inf12 from '../images/inf12.avif'; 
import inf13 from '../images/inf13.avif'; 
import inf14 from '../images/inf14.avif'; 
import inf15 from '../images/inf15.avif'; 
import inf16 from '../images/inf16.avif'; 
import inf17 from '../images/inf17.avif'; 
import inf18 from '../images/inf18.avif'; 


function Anuncios3() {
    const anuncios = [
        { id: 1, img: inf1, nome: "Camiseta Sports Infantil]", tipo: "casual", preco: "R$ 79,99" },
        { id: 2, img: inf2, nome: "Camiseta Patch Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 3, img: inf3, nome: "Camiseta FIT Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 4, img: inf4, nome: "Camiseta HTG Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 5, img: inf5, nome: "Camiseta Mx90 Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 6, img: inf6, nome: "Camiseta ACG Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 7, img: inf7, nome: "Camiseta DOT Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 8, img: inf8, nome: "Camiseta EST Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 9, img: inf9, nome: "Camiseta DRI Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 10, img: inf10, nome: "Camiseta Club Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 11, img: inf11, nome: "Camiseta Trail Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 12, img: inf12, nome: "Camiseta LeBr Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 13, img: inf13, nome: "Camiseta Flight Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 14, img: inf14, nome: "Camiseta Jrda Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 15, img: inf15, nome: "Camiseta Sport Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 16, img: inf16, nome: "Camiseta Just Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 17, img: inf17, nome: "Camiseta Park Infantil", tipo: "casual", preco: "R$ 79,99" },
        { id: 18, img: inf18, nome: "Camiseta ADV Infantil", tipo: "corrida", preco: "R$ 79,99" },
        
    ];

    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 9; 

    const indiceUltimoItem = paginaAtual * itensPorPagina;
    const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
    const anunciosAtuais = anuncios.slice(indicePrimeiroItem, indiceUltimoItem);

    const proximaPagina = () => {
        if (paginaAtual < Math.ceil(anuncios.length / itensPorPagina)) {
            setPaginaAtual(paginaAtual + 1);
        }
    };

    const paginaAnterior = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1);
        }
    };

    return (
        <div>
            <div className="anuncios-container">
                {anunciosAtuais.map(anuncio => (
                    <a href={`/comprar/inf${anuncio.id}`} key={anuncio.id} className="anuncio">
                        <img src={anuncio.img} alt={anuncio.nome} />
                        <h3>{anuncio.nome}</h3>
                        <h4>{anuncio.tipo}</h4>
                        <p>{anuncio.preco}</p>
                    </a>
                ))}
            </div>
            
            <div className="paginacao">
                <button onClick={paginaAnterior} disabled={paginaAtual === 1}>
                    Anterior
                </button>
                <span>Página {paginaAtual} de {Math.ceil(anuncios.length / itensPorPagina)}</span>
                <button onClick={proximaPagina} disabled={paginaAtual === Math.ceil(anuncios.length / itensPorPagina)}>
                    Próximo
                </button>
            </div>
        </div>
    );
}

export default Anuncios3;