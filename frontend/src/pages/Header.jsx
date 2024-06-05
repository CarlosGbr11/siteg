import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="container-header">
            <div className="links-header">
                <Link to='/'><span>Ínicio</span></Link>
                <Link to='/Nike'><span>Nike</span></Link>
                <Link to='/Adidas'><span>Adidas</span></Link>
            </div>
        </div>
    )
}
export default Header;