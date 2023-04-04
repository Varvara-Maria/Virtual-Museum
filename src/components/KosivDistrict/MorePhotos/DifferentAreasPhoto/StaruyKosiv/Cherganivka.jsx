import React from 'react';
import '../ChoisePhoto.scss';
import { useNavigate } from "react-router-dom";

function Cherganivka() {

    let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/kosiv-district/more-photos/cherganivka/old-cherganivka`; 
      navigate(path);
    }

    const routeChange_2 = () =>{ 
      let path = `/kosiv-district/more-photos/cherganivka/new-cherganivka`; 
      navigate(path);
    }

  return (
    <div className='photos'>
        <a onClick={routeChange_1} className='choise'>
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000188-33ed333ed5/1952%20%D1%80%20%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%20%D0%B7%20%D0%B4%D1%80%D1%83%D0%B6%D0%BA%D0%B0%D0%BC%D0%B8%20%D0%B7%20%D1%81%D0%A7%D0%B5%D1%80%D0%B3%D0%B0%D0%BD%D1%96%D0%B2%D0%BA%D0%B0%20%D0%97%20%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%BD%D0%BE%D1%97%20%D0%B7%D0%B1%D1%96%D1%80%D0%BA%D0%B8%20%D0%9F%D0%A4%D1%96%D1%8F%D0%B2%D1%87%D1%83%D0%BA.jpg?ph=0025de801dd" alt="" />
            <p>Історичні фото</p>
        </a>
        <a onClick={routeChange_2} className='choise'>
            <img src="https://velokosiv.if.ua/wp-content/uploads/2013/11/8.jpg" alt="" />
            <p>Сучасні фото</p>
        </a>
    </div>
  )
}

export default Cherganivka