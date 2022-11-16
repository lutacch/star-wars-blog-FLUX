import React, { useContext } from "react";
import { Link, } from "react-router-dom";
import { Context } from "../store/appContext";
import "/workspace/star-wars-blog-FLUX/src/front/styles/home.css";



export const Navbar = () => {
	const {store, actions } = useContext(Context);

	return (
		<div>
	
		<nav className="container navbar justify-content-center bg-black">
			<Link to="/">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" alt="Logo" width="300" className="d-flex justify-content-center"/>
			</Link> 
		</nav>
		<div className="favoritos container d-flex m-5">
				<Link to="/">
				<div className="dropdown">
  					<button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					FAVORITES
  					</button>
					  {store.favorites.map(item => {
							return (
						<li className="dropdown-item bg-white">{item}<button className="btn-danger"onClick = {()=> actions.removeFavorites(item)}>
							X</button></li>)})}	
				</div>
				</Link>
		</div>
		</div>
	
	);
};
