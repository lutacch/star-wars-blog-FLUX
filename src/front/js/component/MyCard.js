import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";





const MyCard = (props) => {

    const { store, actions } = useContext(Context);

    



    return (
        
  

  <div className="container justify-content-center">
          <div className="card " >
          <img
            className="card-img-top"
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              props.id +
              ".jpg"
            }
            alt="Card image cap"
            style={{ width: "100%" }}
          ></img>
            
            <div className="card-body bg-black"  style={{ width: "100%" }}>
                <p className="card-text text-white">{props.name}</p>
                <p><Link to="/detail-card" className="btn btn-warning">Mas informacion</Link></p>
                <button className="btn btn-primary">♡</button>
                
            </div>      
        </div>
      
        </div>

       

    )
}


export default MyCard;