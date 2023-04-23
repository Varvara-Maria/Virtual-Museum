import React from 'react';
import './HutsulTradition.scss';
import { useNavigate } from "react-router-dom";


function HutsulTradition() {

    let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/about-hutsul`; 
      navigate(path);
    }

  return (
    <div className="hutsul">
        <div className='container'> 
        <div className="hutsul-info">
            <div className="hutsul-img">
                <img src="https://vidviday.ua/blog/wp-content/uploads/2017/12/%D0%9F%D0%BE%D0%B6%D0%BE%D0%B4%D0%B6%D1%83%D0%BA%D0%B8.jpg" alt="photo of hutsul" />
                <img src="https://i.siteapi.org/12_amjrISSMbzMhAorpnbad0goQ=/0x0:1200x723/9b287bab56f73d1.ua.s.siteapi.org/img/2ec7vyhaaluskg0goc80kk0kocsc8c" alt="photo of hutsul" />
                <img src="https://huculia.info/wp-content/uploads/2021/02/21.jpg" alt="photo of hutsul" />
                <img src="https://i.pinimg.com/originals/34/b0/b1/34b0b10c169f21fd2b2a986c1fa05d3f.jpg" alt="photo of hutsul" />

            </div>
            <div className="hutsul-text">
                <h2>ГУЦУЛИ ТА ГУЦУЛЬЩИНА, ІСТОРІЯ, ГЕОГРАФІЯ, КУЛЬТУРА, ТРАДИЦІЇ</h2>           
                <p>Гуцули - це етнічна група західних українців, що живуть у Карпатах та Закарпатті.</p>
                <p className='text'>Питання <b>походження назви "гуцули"</b> в науковій літературі досі не з'ясоване. Однак, це не дивно, адже писемні відомості про них та їх назву до XIX ст. мізерні. Різні вчені на протязі часу будували доводи, що назва цього племені готського, печенізького, половецького, тюркського, сарматського, кавказького і навіть етруського походження...</p>
                <a onClick={routeChange_1} href="">Детальніше<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HutsulTradition