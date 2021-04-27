import React from 'react';
import { Link } from 'react-router-dom';

const PosterBox = ({tab}) => {
    const show = tab.map(item => (
        <div key={item.lp} className="poster-box">
            <Link className="poster-child" to={`/catalogue/${item.lp}`}>
                <img id="poster" src={`/images/${item.lp}/poster.jpg`} alt="poster"/>
                <div id="poster-info">
                    <h3>{item.title}</h3>
                    <p>rating: {item.rating}</p>
                    <p>year: {item.premiere.year}</p>
                    <p>category: {item.category}</p>
                </div>    
            </Link> {/* Link do indywidualnej strny filmu */}
        </div>
    ))
    return ( 
        <>
            {show}
        </>
     );
}
 
export default PosterBox;