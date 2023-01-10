import React from 'react';
import { useState, useEffect } from 'react';
import './SliderApp.scss';

const sliderinfo = [
  {
    id: '1',
    title: 'Одяг і час',
    text: "Фільм присвячений одяговим традиціям Косівщини та Вижниччини. Промоційний фільм 'Одяг і час' відзнятий в рамках реалізації спільного проекту Косівської та Вижницької районних рад у 2018 році, і адаптований для осіб з вадами слуху в рамках реалізації проекту у 2019 році.",
    video: 'https://www.youtube.com/embed/L-DBoNnWEIs',
    color: '#592377'
  },
  {
    id: '2',
    title: 'Онлайн-словник',
    text: "Відео-словник елементів гуцульського одягу - це серія коротких відео, які поєднують в собі зображення, звук та переклад на жестовій мові. Важливо, що вони зрозумілі та доступні для перегляду всім кому цікава гуцульська мода!",
    video: 'https://www.youtube.com/embed/Gv9vFk1PeXM',
    color: '#680217'
    },
    
  {
    id: '3',
    title: 'Хранителі гуцульських традицій',
    text: "У селі Криворівня Верховинського району, що на Прикарпатті, розташована садиба-музей, в якій Параджанов знімав фільм 'Тіні забутих предків'. Доглядає за нею подружжя Василя та Василини Зеленчуків, яких ще називають хранителями гуцульських традицій.",
    video: 'https://www.youtube.com/embed/9Ks_Hegp2o4',
    color: '#b6af2e'
  },
  {
    id: '4',
    title: "«Старовинний гуцульський одяг». Ясінянський історико-краєзнавчий музей",
    text: 'Гуцули на відміну від інших найкраще зберегли свої традиції. одяг гуцулів також вирізнявся вишуканістю, багатьма прикрасами і різноманітними кольорами.',
    video: 'https://www.youtube.com/embed/jTKaOsqC8NA',
    color: '#1f472d'
},
];



function SliderApp() {

  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    console.log(slideIndex);
  }, [slideIndex]);
  
  const nextSlide = () => {
    if(slideIndex == sliderinfo.length) {
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  const prevSlide = () => {
    if(slideIndex == 1) {
    }
    else {
      setSlideIndex(slideIndex - 1)
    }
  }

  const renderSlider = sliderinfo.map((item, index) => {

    return (
      index == (slideIndex -1) && 
      <div className="slider-block">
        <div className='slider'>
        {
          slideIndex == 1? <div style={{display: 'none', cursor: 'default'}} class="sliders__prev">
            <i style={{color: 'transparent'}} class="fas fa-angle-left"></i>
          </div> :          
          <div onClick={prevSlide} className="sliders__prev">
            <i class="fas fa-angle-left"></i>
          </div>
        }
          
          <iframe width="900" height="470" src={sliderinfo[index].video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className='slider__info' style={{backgroundColor: sliderinfo[index].color}}>
            <h1>{sliderinfo[index].title}</h1>
            <p className="slider__text">{sliderinfo[index].text}</p>
            
           
          </div>

          {
          slideIndex == 4? <div style={{display: 'none', cursor: 'default'}} class="sliders__prev">
            <i style={{color: 'transparent'}} class="fas fa-angle-right"></i>
          </div> :          
          <div onClick={nextSlide} className="sliders__next">
            <i class="fas fa-angle-right"></i>
          </div>
          }

        </div>  

        <div className="slider__counter">
          {
            slideIndex == 1? <div style={{opacity: 0, cursor: 'default'}} class="offer__slider-prev">
            <i style={{color: 'transparent'}} class="fas fa-angle-left"></i>
          </div> :           
            <div onClick={prevSlide} class="offer__slider-prev">
            <i class="fas fa-angle-left"></i>
          </div>
          }

          <div className='slider__number'>          
            <span id="current">0{slideIndex}/</span>
            <span id="total">0{sliderinfo.length}</span>
          </div>
           {
              slideIndex == 4? <div style={{opacity: 0, cursor: 'default'}} class="offer__slider-next">
              <i style={{color: 'transparent'}} class="fas fa-angle-left"></i>
            </div> :          
             <div  onClick={nextSlide} class="offer__slider-next">
             <i class="fas fa-angle-right"></i>
           </div>
           }

        </div>
      </div>
    );
  });


  return (
    <div>
      {renderSlider}
    </div>
  )
}

export default SliderApp