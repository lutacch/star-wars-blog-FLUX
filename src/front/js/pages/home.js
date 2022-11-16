import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MyCard from "../component/MyCard";
import MyCardPlanets from "/workspace/star-wars-blog-FLUX/src/front/js/component/MyCardPlanets.js";
import MyCardSpecies from "/workspace/star-wars-blog-FLUX/src/front/js/component/MyCardSpecies.js";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="container text-warning">CHARACTERS</h1>
			<div className="container card-group">
				{store.characters.map((item, index)=>{
					return (
						<div key={index}> 
						<MyCard 
						className="row"
						name={item.name}
						uid={index+1}
						index={index}
						/>
						</div>
				)})}		
			</div>
			</div>

			<div className="mt-5">
				<h1 className="container text-warning mt-5">PLANETS</h1>
			<div className="container card-group">
				{store.planets.map((item, index)=>{
					return (
						<div key={index}> 
						<MyCardPlanets 
						className="row"
						name={item.name}
						uid={index+1}
						index={index}
						/>
						</div>
				)})}		
			</div>
			</div>

			<div className="mt-5">
				<h1 className="container text-warning mt-5">SPECIES</h1>
			<div className="container card-group">
				{store.species.map((item, index)=>{
					return (
						<div key={index}> 
						<MyCardSpecies 
						className="row"
						name={item.name}
						uid={index+1}
						index={index}
						/>
						</div>
				)})}		
			</div>
			</div>



		</div>
	
	);
};



