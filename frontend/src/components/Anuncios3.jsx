import React, { useState } from "react";
import './Anuncios.css'
import masc1 from '../images/masc1.avif'; 
import masc2 from '../images/masc2.avif'; 
import masc3 from '../images/masc3.avif'; 
import masc4 from '../images/masc4.avif'; 
import masc5 from '../images/masc5.avif'; 
import masc6 from '../images/masc6.avif'; 
import masc7 from '../images/masc7.avif'; 
import masc8 from '../images/masc8.avif'; 
import masc9 from '../images/masc9.avif'; 
import masc10 from '../images/masc10.avif'; 
import masc11 from '../images/masc11.avif'; 
import masc12 from '../images/masc12.avif'; 
import masc13 from '../images/masc13.avif'; 
import masc14 from '../images/masc14.avif'; 
import masc15 from '../images/masc15.avif'; 
import masc16 from '../images/masc16.avif'; 
import masc17 from '../images/masc17.avif'; 
import masc18 from '../images/masc18.avif'; 


function Anuncios3() {
    const anuncios = [
        { id: 1, img: masc1, nome: "Camiseta Sports Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 2, img: masc2, nome: "Camiseta Patch Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 3, img: masc3, nome: "Camiseta FIT Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 4, img: masc4, nome: "Camiseta HTG Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 5, img: masc5, nome: "Camiseta Mx90 Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 6, img: masc6, nome: "Camiseta ACG Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 7, img: masc7, nome: "Camiseta DOT Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 8, img: masc8, nome: "Camiseta EST Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 9, img: masc9, nome: "Camiseta DRI Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 10, img: masc10, nome: "Camiseta Club Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 11, img: masc11, nome: "Camiseta Trail Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 12, img: masc12, nome: "Camiseta LeBr Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 13, img: masc13, nome: "Camiseta Flight Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 14, img: masc14, nome: "Camiseta Jrda Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 15, img: masc15, nome: "Camiseta Sport Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 16, img: masc16, nome: "Camiseta Just Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 17, img: masc17, nome: "Camiseta Park Masculina", tipo: "casual", preco: "R$ 79,99" },
        { id: 18, img: masc18, nome: "Camiseta ADV Masculina", tipo: "corrida", preco: "R$ 79,99" },
        
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
                    <a href={`/comprar/tenis${anuncio.id}`} key={anuncio.id} className="anuncio">
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