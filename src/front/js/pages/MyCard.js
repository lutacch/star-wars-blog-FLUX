import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";




const MyCard = (props) => {

    const { store, actions } = useContext(Context);



    return (
  

  <div className="container">
          <div className="card">
          <img
            className="card-img-top"
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              props.id +
              ".jpg"
            }
            alt="Card image cap"
            style={{ width: "100%" }}
          />
            
            <div className="card-body bg-black"  style={{ width: "100%" }}>
                <p className="card-text text-white">{props.name}</p>
            </div>      
        </div>
        </div>

       

    )
}


export default MyCard;