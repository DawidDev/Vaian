import React from 'react';

// Importowanie komponentów wyświetlanych na stronie głównej.
import HomeTopTen from '../components/HomeTopTen';
import PopularMovies from '../components/PopularMovies'
import SeriesTV from '../components/SeriesTV';
import Jumbutron from '../components/Jumbutron'

const Home = () => {
    window.scrollTo(0, 0) // Scroll na początek strony po renderze tego komponentu
    return ( 
        <>
            <Jumbutron/>
            <div className="content">
                <HomeTopTen/>
                <PopularMovies/>
                <SeriesTV />
            </div>
        </>
     );
}
 
export default Home;