import React from 'react';
import { Link } from 'react-router-dom';

import  '../style/Home.css';
import { series } from '../database/Series'


const SeriesTV = () => {

    const tab = [...series];
    const readyTab = tab.slice(0,4);
    //console.log(readyTab)

    const readyData = readyTab.map(item => (
        <div key={item.lp} className="poster-box serial">
            <Link className="poster-child" to={`/catalogue/${item.lp}`}>
                <img id="poster" src={process.env.PUBLIC_URL+`/images/${item.lp}/posterbox.jpg`} alt="poster"/>
                <div id="poster-info">
                    <h3>{item.title}</h3>
                    <p>rating: {item.rating}</p>
                    <p>year: {item.premiere.year}</p>
                    <p>category: {item.category}</p>
                </div>    
            </Link>
        </div>
    ))

    return ( 
        <div className="series-tv">
            <h2>TV series</h2>
            {readyData}
        </div>
     );
}
 
export default SeriesTV;