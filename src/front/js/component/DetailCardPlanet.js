import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {Context} from "/workspace/star-wars-blog-FLUX/src/front/js/store/appContext.js";


const DetailCardPlanet = () => {
    const {store, actions} = useContext(Context);
    let parametro = useParams();
    let numero = parseInt(parametro.index);


    return (
        <div className="container detalle">
        <div className="carta-detalle row" >
            <img  src={`https://starwars-visualguide.com/assets/img/planets/${numero + 1 }.jpg`} style={{ width: "30%" }} ></img> 
            <div className="detalle-texto">
                <h1><strong>{store.planets[parametro.index].name}</strong></h1>  	
                <h4><u>Rotation Period:</u> {store.planets[parametro.index].rotation_period}</h4> 
                <h4><u>Orbital Period:</u> {store.planets[parametro.index].orbital_period}</h4> 
                <h4><u>Diameter:</u> {store.planets[parametro.index].diameter}</h4>
                <h4><u>Gravity:</u> {store.planets[parametro.index].gravity}</h4> 
                <h4><u>Terrain:</u> {store.planets[parametro.index].terrain}</h4> 
                <h4><u>Surface Water:</u> {store.planets[parametro.index].surface_water}</h4> 
                <h4><u>Population:</u> {store.planets[parametro.index].population}</h4>  
            </div>
        </div>  
        </div>
    )
}

export default DetailCardPlanet;