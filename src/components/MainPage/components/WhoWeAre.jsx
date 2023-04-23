import React, {useEffect} from 'react';
import './WhoWeAre.scss';
import { useNavigate } from "react-router-dom";

function WhoWeAre() {

    let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/about-us`; 
      navigate(path);
    }

  return (
    <div className='who-we-are'>
            <img className='embroidered-1' src="https://svgshare.com/i/pKJ.svg" alt="" />
            <img className='embroidered-1_1' src="https://svgshare.com/i/pKJ.svg" alt="" />
            <img className='embroidered-2' src="https://svgshare.com/i/pKJ.svg" alt="" />
            <img className='embroidered-2_2' src="https://svgshare.com/i/pKJ.svg" alt="" />

            <p className="who-tittle">Хто ми такі</p>
            <div className="who-info">
                <div className="who-item">
                    <img src="http://new.vkpm.org.ua/wp-content/uploads/2022/12/p1480742-1-2048x1538.jpg" alt="our photo" />
                    <p className="who-text">
                        Вже другий рік поспіль представницькі органи місцевого самоврядування сусідніх областей Буковини й Галичини, мистецькі навчальні заклади, музейні установи Вижниччини та Косівщини спільно працюють над ідеєю дослідження та промоції одягових традицій Гуцульщини поза межами етнорегіону на прикладі своїх територій.
                    </p>
                </div>

                <div className="who-item">
                    <p className="who-text">
                        Вже другий рік поспіль представницькі органи місцевого самоврядування сусідніх областей Буковини й Галичини, мистецькі навчальні заклади, музейні установи Вижниччини та Косівщини спільно працюють над ідеєю дослідження та промоції одягових традицій Гуцульщини поза межами етнорегіону на прикладі своїх територій.
                    </p>
                    <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000010-8b6dc8b6de/P1750294.JPG?ph=0025de801d" alt="photo of hutsul cloth" />
                </div>

                <div className="who-item">
                    <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000001-3629d362a0/P1300348.jpg?ph=0025de801d" alt="wardrobe" />
                    <p className="who-text">
                        Вже другий рік поспіль представницькі органи місцевого самоврядування сусідніх областей Буковини й Галичини, мистецькі навчальні заклади, музейні установи Вижниччини та Косівщини спільно працюють над ідеєю дослідження та промоції одягових традицій Гуцульщини поза межами етнорегіону на прикладі своїх територій.
                    </p>
                </div>

                <a href="" onClick={routeChange_1} class="button">Детальніше</a>
            </div>
    </div>
  )
}

export default WhoWeAre