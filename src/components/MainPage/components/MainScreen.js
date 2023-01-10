import React from 'react';
import './MainScreen.scss';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MainScreen() {

  const sliderSettings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    pauseOnHover:true,
  } 

  return (
    <div className='sliders'>
      <Slider  {...sliderSettings}> 

        <div className="element-slider">
          <img src="./img/img3.jpg" alt="" />
           <div className="text-slider">
            <h4>Ласкаво просимо до:</h4>
            <h5>Віртуального музею одягових традицій Гуцульщини</h5>
            <a href="#" class="button">Детальніше</a>  
           </div>
       </div>

       <div className="element-slider">    
        <img src="./img/img2.jpg" alt="" />
          <div className="text-slider">
            <h4>Дізнайся більше про:</h4>
            <h5>Одягові традиції гуцулів</h5>
            <a href="#" class="button">Детальніше</a>
          </div>
       </div>

       <div className="element-slider">    
        <img src="./img/img1.jpg" alt="" />
          <div className="text-slider">
            <h4>Дивися разомм з нами</h4>
            <h5>Онлайн-словник</h5>
            <a href="#" class="button">Детальніше</a>
          </div>
       </div>

      </Slider>
    </div>
  )
}

export default MainScreen