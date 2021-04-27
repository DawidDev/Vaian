import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import  '../style/Home.css';

import { moviesDatabase } from '../database/Movies'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const ShowButtons = ({ handleCategory }) => {
    const buttons = ['action', 'drama', 'sci-fi', 'romance', 'comedy', 'family', 'horror']
    const readyButtons = buttons.map(item => (
        <button id="btn-home" className={item + ' disabled'} key={item} onClick={handleCategory} name={item}>{item}</button>
    ))
    return(
        <div className="buttons"> 
            {readyButtons} 
        </div>
    )
}

const ShowThisMovies = ({category}) => {
    const data = moviesDatabase.filter(item => item.category === category);
    const readyData = data.map(item => (
        <SwiperSlide key={item.title} className="movie movie-popular">
            <div key={item.lp} className="poster-box">
                <Link className="poster-child" to={`/catalogue/${item.lp}`}>
                    <img id="poster" src={process.env.PUBLIC_URL + `/images/${item.lp}/poster.jpg`} alt="poster"/>  
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
            observer={true} // Dzięki tej właściwości swiper reinicjalizuje się przy jego edycji/aktualizacji
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
            loop={false} 
            loopFillGroupWithBlank={false} 
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}>
               {readyData}
               <div class="swiper-button-next"></div>
               <div class="swiper-button-prev"></div>
            </Swiper>
        </>
    )
}

const PopularMovies = () => {

    const [category, setCategory] = useState('action');

    const allBtn = document.querySelectorAll('#btn-home');

    const handleCategory = (e) => {
        const nameCategory = e.target.name;
        setCategory(nameCategory);

        // Stylowanie aktywnie wybranej kategorii
        allBtn.forEach(item => item.classList.remove('active-btn'))
        let activeBtn = document.querySelector(`.${nameCategory}`)
        activeBtn.className += ' active-btn';
    }


    return ( 
        <div className="container-popular">
            <h2>Popular movies</h2>
            <ShowButtons handleCategory={handleCategory} />
            <ShowThisMovies category={category}/>
        </div>
     );
}
 
export default PopularMovies;