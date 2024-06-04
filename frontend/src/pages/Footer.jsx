import React from "react";
import ig from '../imagens/instagram.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For bussines</h4>
                        <a href="/employer">
                            <p>employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>healthplan</p>
                        </a>
                        <a href="/individual">
                            <p>individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resources">
                            <p>Resource center</p>
                        </a>
                        <a href="/resources">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resources">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Paterns</h4>
                        <a href="/employer">
                            <p>Swing tech</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><img src={ig} alt="" /></p>
                            <p><img src={ig} alt="" /></p>
                            <p><img src={ig} alt="" /></p>
                            <p><img src={ig} alt="" /></p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & condictions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;