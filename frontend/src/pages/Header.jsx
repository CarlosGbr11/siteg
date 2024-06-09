import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="container-header">
            <div className="links-header">
                <Link to='/'><span>Ínicio</span></Link>
            </div>
        </div>
    )
}
export default Header;