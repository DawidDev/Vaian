import React from 'react';
import { Link } from 'react-router-dom';

import  '../style/Home.css';
import  '../style/App.css';

import { moviesDatabase } from '../database/Movies'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const ShowingMovies = ({ tabMovies }) => {
    const tab = tabMovies.map(item => (
        <SwiperSlide key={item.title} className="movie">
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
        </SwiperSlide>
    ))

    return(
        <>
             <Swiper className="swiper" 
             spaceBetween={5} 
             slidesPerView={2} 
             breakpoints={{
                 520: {
                     slidesPerView: 3
                 },
                 780: {
                    slidesPerView: 4
                },
                 1040: {
                     slidesPerView: 5
                 }
             }}
             loop={true} 
             loopFillGroupWithBlank={true} 
             navigation={{
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
             }}>
                {tab}
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
             </Swiper>
        </>
    )
}

const HomeTopTen = () => {
    
    // Definiowanie wybranych 10 filmów 
    const tab = moviesDatabase.filter(item => item.rating >= 3.5);

    // Losowanie maksymalnego indexu w tablicy do losowania
    const fnk = () => {
        const min = 10; // 10 bo potrzebujemy min. index'ów 10 do wyświetlenia, zatem losujemy z przedziału od 10 do max
        const max = tab.length -1;
        const randomIndex = Math.floor(Math.random() * (max - min)) + min;
        return randomIndex
    }
    const indexEndRandom = fnk() // Liczba, maksymalny index w tablicy

    // Przypisanie do tablicy 10 elementów wylosowanych. Dzięki temu filmy nie będą się ciągle powtarzać w Top10.
    let tab2 = [];
    for (let index = indexEndRandom - 10; index < (tab.length >= indexEndRandom ? indexEndRandom : tab.length); index++) {
        const element = tab[index];
        tab2.push(element)
    }

    return ( 
        <div className="topTenSection">
            <h2>Top movies</h2>
            <ShowingMovies tabMovies={tab2}/>
        </div>
     );
}
 
export default React.memo(HomeTopTen)