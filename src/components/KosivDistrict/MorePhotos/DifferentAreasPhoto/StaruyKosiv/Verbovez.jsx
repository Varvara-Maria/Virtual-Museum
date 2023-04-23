import React from 'react';
import '../ChoisePhoto.scss';
import { useNavigate } from "react-router-dom";

function Verbovez() {

    let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/kosiv-district/more-photos/verbovez/old-verbovez`; 
      navigate(path);
    }

    const routeChange_2 = () =>{ 
      let path = `/kosiv-district/more-photos/verbovez/new-verbovez`; 
      navigate(path);
    }

  return (
    <div className='photos'>
        <a onClick={routeChange_1} className='choise'>
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000326-e13e4e13e5/1920-30-%D1%82%D1%96%20%D1%80%D1%80%20%D1%81%D0%92%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D0%B5%D1%86%D1%8C-8.webp?ph=0025de801d" alt="photo of hutsul clotes" />
            <p>Історичні фото</p>
        </a>
        <a onClick={routeChange_2} className='choise'>
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000327-7d9f87d9fa/1930-%D1%82%D1%96%20%D1%80%D1%80%20%D0%9A%D0%B5%D0%BF%D1%82%D0%B0%D1%80%20%D1%81%D0%92%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D0%B5%D1%86%D1%8C%20%D0%97%D1%96%20%D0%B7%D0%B1%D1%96%D1%80%D0%BA%D0%B8%20%D0%9A%D0%9C%D0%9D%D0%9C%D0%9F%D0%93%201.webp?ph=0025de801d" alt="photo of hutsul clotes" />
            <p>Сучасні фото</p>
        </a>
    </div>
  )
}

export default Verbovez