import React, { useContext } from "react";
import { Context } from "/workspace/star-wars-blog-FLUX/src/front/js/store/appContext.js";
import { Link } from "react-router-dom";
import "/workspace/star-wars-blog-FLUX/src/front/styles/home.css";


const MyCardSpecies = (props) => {
    const {store,actions} = useContext(Context);
    let index= props.index;

    return(
        <div className="species justify-content-center">
                <div className="card carta-planetas" >
                    <img className="card-img-top"  src={`https://starwars-visualguide.com/assets/img/species/${props.uid}.jpg`} alt={props.name}/>
                    <div className="card-body bg-black">
                    <p className="card-text text-white">{props.name}</p>
                    <p><Link to={`/detail-card-species/${index}`} className="btn btn-warning">+ Info</Link></p>
                    <button className="btn btn-outline-light" onClick={() => actions.setFavorites(props.name)}> ♥ {store.favorites.includes(props.name)}</button>                     
                    </div>      
                </div>
            </div>

    )
}

export default MyCardSpecies;