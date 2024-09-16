import React, { useState } from "react";
import './Anuncios.css';
import feminino1 from '../images/feminino1.avif'; 
import feminino2 from '../images/feminino2.avif'; 
import feminino3 from '../images/feminino3.avif'; 
import feminino4 from '../images/feminino4.avif'; 
import feminino5 from '../images/feminino5.avif'; 
import feminino6 from '../images/feminino6.avif'; 
import feminino7 from '../images/feminino7.avif'; 
import feminino8 from '../images/feminino8.avif'; 
import feminino9 from '../images/feminino9.avif'; 
import feminino10 from '../images/feminino10.avif'; 
import feminino11 from '../images/feminino11.avif'; 
import feminino12 from '../images/feminino12.avif'; 
import feminino13 from '../images/feminino13.avif'; 
import feminino14 from '../images/feminino14.avif'; 
import feminino15 from '../images/feminino15.avif'; 
import feminino16 from '../images/feminino16.avif'; 
import feminino17 from '../images/feminino17.avif'; 
import feminino18 from '../images/feminino18.avif'; 

function Anuncios2() {
    const anuncios = [
        { id: 1, img: feminino1, nome: "Camiseta Flight Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 2, img: feminino2, nome: "Camiseta Flight Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 3, img: feminino3, nome: "Camiseta Sport Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 4, img: feminino4, nome: "Camiseta Reflect Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 5, img: feminino5, nome: "Camiseta Trail Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 6, img: feminino6, nome: "Camiseta Hood Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 7, img: feminino7, nome: "Camiseta Over Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 8, img: feminino8, nome: "Camiseta Court Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 9, img: feminino9, nome: "Camiseta Victory Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 10, img: feminino10, nome: "Camiseta Tanglin Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 11, img: feminino11, nome: "Camiseta Icon Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 12, img: feminino12, nome: "Camiseta Sport Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 13, img: feminino13, nome: "Camiseta Knit Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 14, img: feminino14, nome: "Camiseta Flight Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 15, img: feminino15, nome: "Camiseta Essent Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 16, img: feminino16, nome: "Camiseta Sports Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 17, img: feminino17, nome: "Camiseta ADV Feminina", tipo: "casual", preco: "R$ 79,99" },
        { id: 18, img: feminino18, nome: "Camiseta Dri-FIT Feminina", tipo: "corrida", preco: "R$ 79,99" },
        
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
                    <a href={`/comprar/fem${anuncio.id}`} key={anuncio.id} className="anuncio">
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

export default Anuncios2;
