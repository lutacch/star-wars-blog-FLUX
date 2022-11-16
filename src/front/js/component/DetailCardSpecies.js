import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {Context} from "/workspace/star-wars-blog-FLUX/src/front/js/store/appContext.js";

const DetailCardSpecies = () => {
    const {store, actions} = useContext(Context);
    let parametro = useParams();
    let numero = parseInt(parametro.index);


    return(
        <div className="container detalle">
        <div className="carta-detalle row" >
            <img  src={`https://starwars-visualguide.com/assets/img/species/${numero + 1 }.jpg`} style={{ width: "30%" }} ></img> 
            <div className="detalle-texto">
                <h1><strong>{store.species[parametro.index].name}</strong></h1>  	
                <h4><u>Classification:</u> {store.species[parametro.index].classification}</h4> 
                <h4><u>Dessignation:</u> {store.species[parametro.index].designation}</h4> 
                <h4><u>Average height:</u> {store.species[parametro.index].average_height}</h4>
                <h4><u>Skin color:</u> {store.species[parametro.index].skin_colors}</h4> 
                <h4><u>Hair color:</u> {store.species[parametro.index].hair_colors}</h4> 
                <h4><u>Eye color:</u> {store.species[parametro.index].eye_colors}</h4> 
                <h4><u>Average lifespan:</u> {store.species[parametro.index].average_lifespan}</h4>  
                <h4><u>Homeworld:</u> {store.species[parametro.index].homeworld}</h4>  
                <h4><u>Language:</u> {store.species[parametro.index].language}</h4>  
            </div>
        </div>  
        </div>
    )
}

export default DetailCardSpecies;

