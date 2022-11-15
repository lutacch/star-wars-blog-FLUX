import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";





const MyCard = (props) => {

    const { store, actions } = useContext(Context);
    let index = props.index;

    



    return (
        
  

  <div className="container justify-content-center">
          <div className="card " >
          <img className="card-img-top"  src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} alt={props.name}/>
            
            <div className="card-body bg-black"  style={{ width: "100%" }}>
                <p className="card-text text-white">{props.name}</p>
                <p><Link to={`/detail-card-character/${index}`} className="btn btn-warning">ver mas</Link></p>
                <button className="btn btn-primary">♡</button>
                
            </div>      
        </div>
      
        </div>

       

    )
}


export default MyCard;