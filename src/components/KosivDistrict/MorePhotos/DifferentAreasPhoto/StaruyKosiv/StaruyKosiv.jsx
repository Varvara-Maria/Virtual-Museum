import React from 'react';
import '../ChoisePhoto.scss';
import { useNavigate } from "react-router-dom";

function StaruyKosiv() {

    let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/kosiv-district/more-photos/staruy-kosiv/old-kosiv`; 
      navigate(path);
    }

    const routeChange_2 = () =>{ 
      let path = `/kosiv-district/more-photos/staruy-kosiv/new-kosiv`; 
      navigate(path);
    }

  return (
    <div className='photos'>
        <a onClick={routeChange_1} className='choise'>
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000325-310a3310a4/700/%D0%93%D1%83%D1%86%D1%83%D0%BB%20%D0%B2%20%D1%87%D0%B5%D1%80%D0%B5%D1%81%D1%96%C2%AB%D0%94%D1%83%D0%B4%D1%8F%D1%80%20%D0%B7%20%D0%BE%D0%BA%D0%BE%D0%BB%D0%B8%D1%86%D1%96%20%D0%9A%D0%BE%D1%81%D0%BE%D0%B2%D0%B0%C2%BB%20%D0%9A%D0%BE%D1%81%D1%96%D0%B2%201932%20%D1%80%20%D0%A4%D0%BE%D1%82%D0%BE%20%D0%9C%D0%A1%D0%B5%D0%BD%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE.webp?ph=0025de801d" alt="photo of hutsul clotes" />
            <p>Історичні фото</p>
        </a>
        <a onClick={routeChange_2} className='choise'>
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000300-24a8624a88/48985063_775647046122288_1161328679750467584_n.webp?ph=0025de801d" alt="photo of hutsul clotes" />
            <p>Сучасні фото</p>
        </a>
    </div>
  )
}

export default StaruyKosiv