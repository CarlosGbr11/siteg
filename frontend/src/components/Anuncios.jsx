import React, { useState } from "react";
import './Anuncios.css';
import tenis1 from '../images/tenis1.jpg'; 
import tenis2 from '../images/tenis2.jpg'; 
import tenis3 from '../images/tenis3.jpg'; 
import tenis4 from '../images/tenis4.jpg'; 
import tenis5 from '../images/tenis5.jpg'; 
import tenis6 from '../images/tenis6.jpg'; 
import tenis7 from '../images/tenis7.jpg'; 
import tenis8 from '../images/tenis8.jpg'; 
import tenis9 from '../images/tenis9.jpg'; 
import tenis10 from '../images/tenis10.jpg'; 
import tenis11 from '../images/tenis11.jpg'; 
import tenis12 from '../images/tenis12.jpg'; 
import tenis13 from '../images/tenis13.jpg'; 
import tenis14 from '../images/tenis14.jpg'; 
import tenis15 from '../images/tenis15.jpg'; 
import tenis16 from '../images/tenis16.jpg'; 
import tenis17 from '../images/tenis17.jpg'; 
import tenis18 from '../images/tenis18.jpg'; 


function Anuncios() {
    const anuncios = [
        { id: 1, img: tenis1, nome: "Dunk Low Viotech", preco: "R$ 499,99" },
        { id: 2, img: tenis2, nome: "Air Jordan 1 Low OG", preco: "R$ 499,99" },
        { id: 3, img: tenis3, nome: "Dunk Low Aster Pink", preco: "R$ 499,99" },
        { id: 4, img: tenis4, nome: "Air 180 Summit White", preco: "R$ 499,99" },
        { id: 5, img: tenis5, nome: "Dunk Low Anthracite", preco: "R$ 499,99" },
        { id: 6, img: tenis6, nome: "Giannis Freak 6 Roses", preco: "R$ 499,99" },
        { id: 7, img: tenis7, nome: "Air Jordan 4 Wet Cement", preco: "R$ 499,99" },
        { id: 8, img: tenis8, nome: "Sb Ps8 Black Sail", preco: "R$ 499,99" },
        { id: 9, img: tenis9, nome: "Air Max Sndr Canyon Gold", preco: "R$ 499,99" },
        { id: 10, img: tenis10, nome: "Air Max Sndr Hyper Pink", preco: "R$ 499,99" },
        { id: 11, img: tenis11, nome: "Air Max Sndr Black", preco: "R$ 499,99" },
        { id: 12, img: tenis12, nome: "Jam Train Olympics", preco: "R$ 499,99" },
        { id: 13, img: tenis13, nome: "Zoom Vomero 5 zstardust", preco: "R$ 499,99" },
        { id: 14, img: tenis14, nome: "Field General 82 Light Volt", preco: "R$ 499,99" },
        { id: 15, img: tenis15, nome: "Field General 82 Red", preco: "R$ 499,99" },
        { id: 16, img: tenis16, nome: "Field General 82 Green", preco: "R$ 499,99" },
        { id: 17, img: tenis17, nome: "Air Jordan 5 White", preco: "R$ 499,99" },
        { id: 18, img: tenis18, nome: "Air Jordan 6 Navy", preco: "R$ 499,99" },
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

export default Anuncios;