import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="container-header">
            <Link to='/'><h1>HYPE</h1></Link>
            <div className="links-header">
                <Link to='/calçados'><span>CALÇADOS</span></Link>
                <Link to='/mulher'><span>MULHER</span></Link>
                <Link to='/homem'><span>HOMEM</span></Link>
                <Link to='/infantil'><span>INFANTIL</span></Link>
                <Link to='/esportes'><span>ESPORTES</span></Link>
            </div>
        </div>
    )
}
export default Header;