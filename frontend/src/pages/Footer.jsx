import React from "react";
import ig from '../images/instagram.png';
import wp from '../images/whatsapp.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer section__padding">
                <div className="footer-links">
                    <div className="footer-links_div">
                        <h4>Quem Somos?</h4>
                        <h5>Nosso portfólio é cuidadosamente curado, trazendo as últimas tendências e peças atemporais que refletem o estilo e a sofisticação que nossos clientes merecem.</h5>
                    </div>
                    <div className="footer-links_div">
                        <h4>Ajuda</h4>
                        <p>Como comprar</p>
                        <p>Resolver problemas</p>
                    </div>
                    <div className="footer-links_div">
                        <h4>Suporte</h4>
                        <p>Política de moderação</p>
                        <p>Contato</p>
                    </div>
                    <div className="footer-links_div">
                        <h4>Mídia Social</h4>
                        <div className="socialmedia">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><p><img src={ig} alt="insta" /></p></a>
                            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><p><img src={wp} alt="wpp" /></p></a>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className="footer-below-links">
                        <div><p>Termos e condições</p></div>
                        <div><p>Privacidade</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;