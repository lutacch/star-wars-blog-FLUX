import React, {useContext} from "react";
import { useParams } from "react-router-dom";  
import { Context } from "/workspace/star-wars-blog-FLUX/src/front/js/store/appContext.js";


const DetailCardCharacter = (props) => {

    const { store, actions } = useContext(Context);
    let parametro = useParams();  
    let numero = parseInt(parametro.index);
  
    return (

        <div className="card bg-white" >
         	<img className="card-img-top"  src={`https://starwars-visualguide.com/assets/img/characters/${numero + 1 }.jpg`} style={{ width: "20%" }} ></img> 
          <h1>{store.characters[parametro.index].name}</h1>  	
          <h2>{store.characters[parametro.index].height}</h2> 
          <h2>{store.characters[parametro.index].hair_color}</h2> 
          <h2>{store.characters[parametro.index].skin_color}</h2> 
          <h2>{store.characters[parametro.index].eye_color}</h2> 
          <h2>{store.characters[parametro.index].birth_year}</h2> 
          <h2>{store.characters[parametro.index].gender}</h2>
       
        </div>
      
    )
}

export default DetailCardCharacter;