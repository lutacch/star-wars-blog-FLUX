import React, {useContext} from "react";
import { useParams } from "react-router-dom";  
import { Context } from "/workspace/star-wars-blog-FLUX/src/front/js/store/appContext.js";

const DetailCardCharacter = (props) => {
    const { store, actions } = useContext(Context);
    let parametro = useParams();  
    let numero = parseInt(parametro.index);
 
    return (
        <div className="container detalle">
        <div className="carta-detalle row" >
            <img  src={`https://starwars-visualguide.com/assets/img/characters/${numero + 1 }.jpg`} style={{ width: "30%" }} ></img> 
            <div className="detalle-texto">
                <h1><strong>{store.characters[parametro.index].name}</strong></h1>  	
                <h4><u>Height:</u> {store.characters[parametro.index].height}</h4> 
                <h4><u>Birth year:</u> {store.characters[parametro.index].birth_year}</h4> 
                <h4><u>Gender:</u> {store.characters[parametro.index].gender}</h4>
                <h4><u>Hair color:</u> {store.characters[parametro.index].hair_color}</h4> 
                <h4><u>Skin color:</u> {store.characters[parametro.index].skin_color}</h4> 
                <h4><u>Eye color:</u> {store.characters[parametro.index].eye_color}</h4> 
             
            </div>
        
        </div>  
        </div>
    )
}

export default DetailCardCharacter;