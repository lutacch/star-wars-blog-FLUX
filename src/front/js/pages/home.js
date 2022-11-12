import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MyCard from "./MyCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		
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
	
	);
};
