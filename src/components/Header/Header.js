import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<h2>Wellcome to my Page</h2>
			<nav className="menu">
				<a href="">Home</a>
				<a href="">About</a>
				<a href="">Contact</a>
			</nav>
		</div>
	);
};

export default Header;
