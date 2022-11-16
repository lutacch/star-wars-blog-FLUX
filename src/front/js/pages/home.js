import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MyCard from "../component/MyCard";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div><h1 className="container text-warning">CHARACTERS</h1>
			<div className="container card-group">
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



