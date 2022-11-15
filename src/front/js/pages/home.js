import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MyCard from "../component/MyCard";


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
						uid={index+1}
						index={index}
						/>
						</div>
				)})}		
			</div>
			</div>
	);
};
