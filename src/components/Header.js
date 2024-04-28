import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header">
			<Link href="/" className="logo">Siber Olaylara Müdahale Eylem Planı</Link>
			{/* <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div> */}
		</div>
	);
}

export default Header;
