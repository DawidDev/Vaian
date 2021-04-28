import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from "../context/AppContext";

import PosterBox from '../components/PosterBox'

import { moviesDatabase } from '../database/Movies'

import  '../style/Search.css';

const Search = () => {
    window.scrollTo(0, 0) // Scroll na początek strony po renderze tego komponentu
    const { search } = useContext(AppContext);
    const tab = moviesDatabase.filter(item => item.title.toLowerCase().includes(search.toLowerCase()) )
    console.log(tab);
    
    return ( 
        <>
            <div className="container-search">  
                <PosterBox tab={tab} />
            </div>
        </>
     );
}
 
export default Search;
