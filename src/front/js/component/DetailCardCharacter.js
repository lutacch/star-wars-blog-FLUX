import React, {useContext} from "react";
import { useParams } from "react-router-dom";  
import { Context } from "/workspace/star-wars-blog-FLUX/src/front/js/store/appContext.js";


const DetailCardCharacter = () => {

    const { store, actions } = useContext(Context);

   let parametro = useParams();  

    return (

        <div className="card bg-white">
          <h1>{store.characters[parametro.index].name}</h1> 
        </div>

   
  
      
    )
}

export default DetailCardCharacter;