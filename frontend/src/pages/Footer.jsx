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
                        <h5>A Hype nasceu do sonho de transformar a forma como as pessoas se vestem. Desde o início, acreditamos que a moda vai além das tendências passageiras </h5>
                        <a href="/saiba-mais">
                            <p>Saiba mais</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Ajuda</h4>
                        <a href="/resources">
                            <p>Nosso atendimento</p>
                        </a>
                        <a href="/resources">
                            <p>Formas de pagamento</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Suporte</h4>
                        <a href="/about">
                            <p>Entrega</p>
                        </a>
                        <a href="/press">
                            <p>Pedidos</p>
                        </a>
                        <a href="/career">
                            <p>Produtos</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Mídia Social</h4>
                        <div className="socialmedia">
                            <p><img src={ig} alt="" /></p>
                            <p><img src={wp} alt="" /></p>
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
                        <a href="/terms"><div><p>Termos e condições</p></div></a>
                        <a href="/privacy"><div><p>Privacidade</p></div></a>
                        <a href="/security"><div><p>Segurança</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;