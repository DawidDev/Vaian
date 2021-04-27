import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { moviesDatabase } from '../database/Movies'
import { series as seriesDatabase } from '../database/Series'
import { AppContext } from "../context/AppContext";
import PosterBox from '../components/PosterBox'

import  '../style/SelectedMovie.css';

import starRating from '../icons/starRating.png'

// Swiper component
import SwiperCore, { A11y, EffectFade, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

SwiperCore.use([ A11y, EffectFade, Autoplay ]);

const photosFromMovie = [1, 2, 3, 4]; // Deklarowanie ilości zdjęć w komponencie 'SliderBackground'.

// Komponent generujący tło w komponencie 'SelectedMovie'
const SliderBackground = ({index}) => {
    const readySlider = photosFromMovie.map(item => {
        return (
        <SwiperSlide key={item}>
           <img id="background" src={process.env.PUBLIC_URL + `/images/${index}/img${item}.jpg`} alt="slide"/>
           <div className="gradient-box"></div>
        </SwiperSlide>
    )})
    return(
        <div className="slider-background">
            <Swiper className="slide" 
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
        }}>
          {readySlider}  
        </Swiper>
        </div>
    )
}

// Komponent odpowiedzialny za umieszczenie odpowiedniej ilości gwiazdek dotyczące wartości 'rating' z bazy. 
const Stars = ({number}) => {
    const star = <img src={starRating} alt="star" />
    const tab = [];
    for (let i = 0; i < number; i++) {
        tab.push(i)
    }

    const readyStars = tab.map(item => (
        <div key={item} className="star">{star}</div>
    ))
    return(
        <div className="stars-box">
            {readyStars}
        </div>
    )
}

const SelectedMovie = ({match}) => { 

    // Ustawianie scrolla na 0. Góra strony.
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [match])

    // Funkcja dodająca film do ulubionych
    const { addLikedMovie } = useContext(AppContext);
    
    //console.log(match.params.id)
    // Pobranie id wybranego filmu i przypisanie do obiektu
    const index = match.params.id * 1;
    const selectedMovie = moviesDatabase.concat(seriesDatabase).filter(item => item.lp === index)[0]

    const similarMovies = moviesDatabase.concat(seriesDatabase).filter(item => item.category === selectedMovie.category)
    similarMovies.indexOf(selectedMovie.lp)
    similarMovies.slice(0,10)

    return ( 
        <>
            <SliderBackground index={index} />
            <div className="content-selected-movie">
                <div className="main-info"> 
                    <h2>{selectedMovie.title}</h2>
                    <p>{selectedMovie.premiere.year} | +12</p>
                    <div className="box-info">
                        <p>{selectedMovie.category}</p>
                        <Stars number={selectedMovie.rating}/>
                    </div>
                    <p className="short-text">{selectedMovie.shortDescription}</p>
                    <button id="play">Play</button>
                    <button id="add" onClick={addLikedMovie.bind(this, moviesDatabase[index-1])}>Add to card</button>
                </div>
                </div>

                <div className="more-info">
                    <div className="description">
                        <div className="long-text">
                            <h4>Description</h4>
                            <p>{selectedMovie.longDescription}</p>
                        </div>
                        <div className="trailer">
                            <h4>Trailer</h4>
                            <iframe id="yt-trailer" src=""></iframe> 
                        </div>
                    </div>
                    <div className="similar">
                        <h4>More in category</h4>
                        <PosterBox tab={similarMovies}/>
                    </div>
                </div>
       </>
     );
}
 
export default React.memo(SelectedMovie);