import React from 'react';
import sock from '../../images/christmas-sock.png';
import wreath from '../../images/christmas-wreath.png';
import mistleToe from '../../images/mistletoe.png';
import './Header.css';

const Header = () => (
	<section className="Header__container">
		<div className="Header__image"><img src={sock} alt="christmas sock"></img></div>
		<div className="Header__image medium"><img src={wreath} alt="christmas wreath"></img></div>
		<div className="Header__image"><img src={mistleToe} alt="christmas mistleToe"></img></div>
	</section>
);

export default Header;
