import React, {useContext} from "react";
import { Context } from "/workspace/star-wars-blog-FLUX/src/front/js/store/appContext.js";

const DetailCard = (props) => {

    const { store, actions } = useContext(Context);

    return (
   
        <div className="card">
 
  <div className="card-body">
    <p>Height: </p>

    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      
    )
}

export default DetailCard;