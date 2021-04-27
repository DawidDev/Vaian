import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import  '../style/Home.css';

import starRating from '../icons/starRating.png'

import { moviesDatabase } from '../database/Movies'
import { AppContext } from "../context/AppContext";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay ]);

const moviesObj = [
    {
        lp: 1,
        title: moviesDatabase[0].title,
        year: moviesDatabase[0].year,
        rating: moviesDatabase[0].rating, 
    },
    {
        lp: 2,
        title: moviesDatabase[1].title,
        year: moviesDatabase[1].year,
        rating: moviesDatabase[1].rating, 
    },
    {
        lp: 19,
        title: moviesDatabase[18].title,
        year: moviesDatabase[18].year,
        rating: moviesDatabase[18].rating, 
    }
    
]

// Pokazywanie określonej liczby gwiazdek w jumbutronie przy danym tytule
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

const ShowingJumbo = () => {
    const { addLikedMovie } = useContext(AppContext);
    const readyData = moviesObj.map(item => {
        const stars = item.rating;
        return (
        <SwiperSlide key={item.title}>
            <div className="applet">
                <div className="isNew">NEW</div>
                <h1>{item.title}</h1>
                <div className="info">
                    <p>2018 | +12</p>
                    <Stars number={stars}/>
                    <button className="btn-details">
                        <Link id="btn-details-link" to={`/catalogue/${item.lp}`}>Details</Link>
                    </button>
                </div>
                <button id="play">Play</button>
                <button id="add" onClick={addLikedMovie.bind(this, item)} >Add to card</button>
            </div>
            
            <img id="slider" src={process.env.PUBLIC_URL +`/images/${item.lp}/img1.jpg`} alt="jumbutron"/>
            <div className="gradient-box"></div>
        </SwiperSlide>
    )})
    return(
        <Swiper className="swiper-container" 
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
            delay: 8000,
            disableOnInteraction: false,
        }}
        pagination={{
            el: '.swiper-pagination',
            clickable: true,
        }}
        >
          {readyData}  
          <div class="swiper-pagination swiper-pagination-white"></div>
        </Swiper>
        
    )
}


const Jumbutron = () => {
    return ( 
        <div className="jumbutron">
            <ShowingJumbo />
        </div>
     );
}
 
export default Jumbutron;