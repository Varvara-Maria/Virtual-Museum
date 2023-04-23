import React from 'react';
import '../ChoisePhoto.scss';
import { useNavigate } from "react-router-dom";

function Smodna() {
  
    let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/kosiv-district/more-photos/smodna/old-smodna`; 
      navigate(path);
    }

    const routeChange_2 = () =>{ 
      let path = `/kosiv-district/more-photos/smodna/new-smodna`; 
      navigate(path);
    }

  return (
    <div className='photos'>
        <a onClick={routeChange_1} className='choise'>
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000473-657b0657b1/700/1957%20%D1%80%20%D0%92%D0%B5%D1%81%D1%96%D0%BB%D1%8C%D0%BD%D0%B0%20%D0%B4%D1%80%D1%83%D0%B6%D0%BA%D0%B0%20%D0%B7%20%D1%81%D0%A1%D0%BC%D0%BE%D0%B4%D0%BD%D0%B0.webp?ph=0025de801d" alt="photo of hutsul clotes" />
            <p>Історичні фото</p>
        </a>
        <a onClick={routeChange_2} className='choise'>
            <img src="http://www.kosivart.net/albums/userpics/10001/vokalniy_ansambl_Namisto.jpg" alt="photo of hutsul clotes" />
            <p>Сучасні фото</p>
        </a>
    </div>
  )
}

export default Smodna