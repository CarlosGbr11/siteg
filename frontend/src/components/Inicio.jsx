import React, { useState, useEffect } from "react";
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import './Inicio.css'; 

function Inicio() {
    const imagens = [slide1, slide2];
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
            <button className="carousel-button left" onClick={voltarSlide}>&#10094;</button>
            <button className="carousel-button right" onClick={proximoSlide}>&#10095;</button>
            <div className="carousel-indicators">
                {imagens.map((_, indice) => (
                    <span
                        key={indice}
                        className={`indicator ${indiceAtual === indice ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Inicio;
