import './Inicio.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slide from '../images/slide.avif';
import slide2 from '../images/slide2.avif';
import tenis1 from '../images/tenis1.jpg';
import masc1 from '../images/masc1.avif';
import inf1 from '../images/inf1.avif';
import feminino1 from '../images/feminino1.avif';

const images = [slide, slide2];

function Inicio() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-indicators"></div>
            <div className="slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <div className='text'>
                <p>Cada item em nossa loja foi escolhido com atenção ao detalhe e ao estilo, garantindo que você encontre itens de alta qualidade que atendem às suas expectativas de moda e sofisticação.</p>
            </div>
            <div className="gallery">
                <Link to="/comprar/tenis1"><img src={tenis1} alt="Item 1" /></Link>
                <Link to="comprar/masc1"><img src={masc1} alt="Item 2" /></Link>
                <Link to="/comprar/inf1"><img src={inf1} alt="Item 3" /></Link>
                <Link to="/comprar/fem1"><img src={feminino1} alt="Item 4" /></Link>
            </div>
        </div>
    );
}

export default Inicio;