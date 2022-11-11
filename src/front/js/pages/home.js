import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<div>
				{store.characters.map((item, index)=>{
					return (
						<div key={index}> 
						{item.name}	
						</div>
					)
				})}
			</div>
		</div>
	);
};
