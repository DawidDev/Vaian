import React from 'react';
import { Link } from 'react-router-dom';

import PosterBox from '../components/PosterBox'

import  '../style/New.css';
import  '../style/App.css';

import { moviesDatabase } from '../database/Movies'

const New = () => {
    window.scrollTo(0, 0) // Scroll na początek strony po renderze tego komponentu

    // Sortowanie tablicy zawierającej filmy. 
    const tab = [...moviesDatabase]
    const readyTab = tab.sort((a, b) => (
        a.premiere.year < b.premiere.year) ? 1 : (
            a.premiere.year === b.premiere.year) ? (
                (a.premiere.month < b.premiere.month) ? 1 : -1) : -1);
    
    readyTab.slice(0,20);
    //console.log(readyTab)

    return ( 
        <div className="container-new-movies">
            <h2 className="title">New</h2>
            <PosterBox tab={readyTab}/>
        </div>
     );
}
 
export default New;








// W praktyce baza danych powinna dostarczyć osobną tablicę
// zawierającą tylko nowe filmy, aby aplikacja nie musiała 
// przetwarzać całej bazy danych - kwestie optymalizacyjne.