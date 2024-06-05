import React, { useState, useEffect } from "react";
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import Anuncios from "./Anuncios";
import './Inicio.css';

function Inicio() {

    const imagens = [slide1, slide2, slide3];
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
        }, 5000);

        return () => clearInterval(intervalo);
    }, [imagens.length]);

    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    };

    const voltarSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
    };

    return (

        <div className="carousel">
            <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} className="carousel-image" />
            <div className="carousel-indicators">
                {imagens.map((_, indice) => (
                    <span
                        key={indice}
                        className={`indicator ${indiceAtual === indice ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
            <Anuncios /> 
        </div>
        
    );
}

export default Inicio;
