import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {


	return (
		<div>
	
		<nav className="navbar justify-content-center bg-black">
			<Link to="/">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" alt="Logo" width="300" class="d-flex justify-content-center"/>
			</Link> 
		</nav>


		<div className="d-flex justify-content-center">
				<Link to="/demo">
					<button className="btn btn-danger justify-content-center">Favorites</button>
				</Link>
			</div>

		</div>
	
	);
};
