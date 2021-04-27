import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AppContext } from "../context/AppContext";

import  '../style/Card.css';

const Card = () => {
    const { myLikedMovies, removeLikedMovie } = useContext(AppContext);
    //console.log(myLikedMovies);

    const ShowMovies = myLikedMovies.map(item => (
        <div key={item.title} className="poster-box">
            <Link className="poster-child" to={`/catalogue/${item.lp}`}>
                <img id="poster" src={`/images/${item.lp}/poster.jpg`} alt="poster"/>    
            </Link> 
            <button id="remove-liked" onClick={removeLikedMovie.bind(this, item.lp)} >Remove</button>
        </div>
    ))

    return ( 
        <div className="container-card">
            {ShowMovies}
        </div>
     );
}
 
export default Card;