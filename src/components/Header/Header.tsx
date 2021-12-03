import React from 'react'
import sock from "../../images/christmas-sock.png";
import wreath from "../../images/christmas-wreath.png";
import mistleToe from "../../images/mistletoe.png";
import './Header.css';

const Header = () => {
    return (
    <header className="Header__container">
            <div className="Header__image"><img src={sock} alt="christmas image"></img></div>
            <div className="Header__image medium"><img src={wreath} alt="christmas image"></img></div>
            <div className="Header__image"><img src={mistleToe} alt="christmas image"></img></div>
    </header>
    )
}

export default Header
