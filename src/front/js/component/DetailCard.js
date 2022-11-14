import React, {useContext} from "react";
import { Context } from "/workspace/star-wars-blog-FLUX/src/front/js/store/appContext.js";


const DetailCard = (props) => {

    const { store, actions } = useContext(Context);

    return (

         <div className="card " >
          <h1>SOY LA CARTA DE DETALLE</h1>
          </div> 

   
  
      
    )
}

export default DetailCard;