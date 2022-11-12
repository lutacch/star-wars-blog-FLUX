import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MyCard from "../component/MyCard";
import DetailCard from "/workspace/star-wars-blog-FLUX/src/front/js/component/DetailCard.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card-group">
				{store.characters.map((item, index)=>{
					return (
						<div key={index}> 
						<MyCard 
						className="row"
						name={item.name}
						height={item.height}
						id={index+1}/>
						</div>
					)
				})}		
			</div>

			<DetailCard/>

			</div>
	);
};
