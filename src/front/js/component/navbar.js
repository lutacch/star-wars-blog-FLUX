import React, { useContext } from "react";
import { Link, } from "react-router-dom";
import { Context } from "../store/appContext";



export const Navbar = () => {
	const {store, actions } = useContext(Context);

	return (
		<div>
	
		<nav className="navbar justify-content-center bg-black">
			<Link to="/">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" alt="Logo" width="300" className="d-flex justify-content-center"/>
			</Link> 
		</nav>
		<div className="d-flex m-5">
				<Link to="/">
				<div class="dropdown">
  					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					FAVORITOS
  					</button>
					  {store.favorites.map(item => {
							return (
						<li className="dropdown-item bg-white">{item}<button onClick = {()=> actions.removeFavorites(item)}>
							X</button></li>)})}	
				</div>
				</Link>
		</div>
		</div>
	
	);
};
