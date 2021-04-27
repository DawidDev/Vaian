import React, { useState } from 'react';

import PosterBox from '../components/PosterBox'

import  '../style/Catalogue.css';
import  '../style/App.css';

import { moviesDatabase } from '../database/Movies'
import { series as seriesDatabase } from '../database/Series'

import arrow from '../icons/arrow.png'

const Catalogue = () => {
    window.scrollTo(0, 0) // Scroll na początek strony po renderze tego komponentu
    const [category, setCategory] = useState("all categories"); 
    const [typeSort, setTypeSort] = useState("default");
    
    const choseCategory = (e) => { 
        setCategory(e.target.value);
        document.querySelector('.list-category').classList.toggle('show-list');
    }
    const handleSort = (e) => { 
        setTypeSort(e.target.value);
        document.querySelector('.list-sort').classList.toggle('show-list');
    }
    
    // Sortowanie i filtrowanie po kategorii bazy filmów do wyświetlenia
    const data = moviesDatabase.concat(seriesDatabase)
    const readyData = category === "all categories" ? data : data.filter(item => item.category === category);
    let readyDataAfterSort = [...readyData]; // Tworzenie kopii tablicy 'readyData'
    switch (typeSort) {
        case 'premiere':
            readyDataAfterSort.sort((a, b) => (
                a.premiere.year < b.premiere.year) ? 1 : (
                    a.premiere.year === b.premiere.year) ? (
                        (a.premiere.month < b.premiere.month) ? 1 : -1) : -1);
            break;
        case 'a-z':
            readyDataAfterSort.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default:
            readyDataAfterSort = readyData;
            break;
    }
    //console.log(readyDataAfterSort)


    // Obsługa otwierania i zamykania menu opcji dla wyboru kategorii oraz typu sortowania 
    const toggleClass = (e) => {
        const id = e.target.id;
        //console.log(e.target.id)
        if(id === 'category') {
            document.querySelector('.list-category').classList.toggle('show-list');
        }
        else if(id === 'sort'){
            document.querySelector('.list-sort').classList.toggle('show-list');
        }
    }
    // Zamykanie menu
    const closeMenuCategory = () => { 
        document.querySelector('.list-category').classList.remove('show-list'); 
        }
    const closeMenuSort = () => { 
        document.querySelector('.list-sort').classList.remove('show-list'); 
    }
    const arrowImg = <img className="arrow" src={arrow} alt="arrow" />

    return ( 
        <div className="container-catalogue">
            <h2 className="title">Catalogue</h2>
            <div className="attribute">
                <div className="attribute-category" onMouseLeave={closeMenuCategory}>
                    <button  className="select" onClick={toggleClass} id="category">{category.toUpperCase()}{arrowImg}</button>
                    <div className="list list-category">
                    <option onClick={choseCategory} value="all categories">All</option>
                    <option onClick={choseCategory} value="action">Action</option>
                    <option onClick={choseCategory} value="family">Family</option>
                    <option onClick={choseCategory} value="sci-fi">Science fiction</option>
                    <option onClick={choseCategory} value="fantasy">Fantasy</option>
                    <option onClick={choseCategory} value="history">History</option>
                    <option onClick={choseCategory} value="horror">Horror</option>
                    <option onClick={choseCategory} value="romance">Romantic</option>
                    <option onClick={choseCategory} value="sport">Sport</option>
                    <option onClick={choseCategory} value="thrillers">Thrillers</option>
                    <option onClick={choseCategory} value="comedy">Comedy</option>
                </div>
                </div>
            <div className="attribute-sort" onMouseLeave={closeMenuSort}>
                <button className="select" onClick={toggleClass} id="sort">{typeSort.toUpperCase()}{arrowImg}</button>
                <div className="list list-sort">
                    <option onClick={handleSort} value="default">Default</option >
                    <option onClick={handleSort} value="premiere">Date of production</option>
                    <option onClick={handleSort} value="a-z">By title</option>
                </div>
            </div>
            </div>
            <PosterBox tab={readyDataAfterSort} />
        </div>
     );
}
 
export default Catalogue;