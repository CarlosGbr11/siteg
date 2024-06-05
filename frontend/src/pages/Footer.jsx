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
                        <h5>Na Hype, acreditamos que um bom par de tênis pode fazer toda a diferença na sua vida. Seja você um atleta em busca de desempenho superior, um entusiasta da moda querendo destacar-se com estilo, temos o par perfeito para você! </h5>
                        <a href="/quem/somos">
                            <p>Saiba mais</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Ajuda</h4>
                        <a href="/ajuda">
                            <p>Nosso atendimento</p>
                        </a>
                        <a href="/ajuda">
                            <p>Formas de pagamento</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Suporte</h4>
                        <a href="/suporte">
                            <p>Entrega</p>
                        </a>
                        <a href="/suporte">
                            <p>Pedidos</p>
                        </a>
                        <a href="/suporte">
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