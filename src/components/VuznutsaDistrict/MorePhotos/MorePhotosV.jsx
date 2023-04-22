import React from 'react';
import './MorePhotos.scss';
import { useNavigate } from "react-router-dom";

export default function MorePhotos() {

    let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/vuznutsa-district/more-photos/vuzenka`; 
      navigate(path);
    }

    const routeChange_2 = () =>{ 
      let path = `/vuznutsa-district/more-photos/chornoguzu`; 
      navigate(path);
    }

	const routeChange_3 = () =>{ 
		let path = `/vuznutsa-district/more-photos/ispas`; 
		navigate(path);
	}

	const routeChange_4 = () =>{ 
		let path = `/vuznutsa-district/more-photos/vashkivtsy`; 
		navigate(path);
	}

  return (
    <div className='more-photos'>
        <a  onClick={routeChange_1} className="kosiv-many-photos">
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000312-0d2be0d2bf/700/P1680329-9.webp?ph=0025de801d" alt="" />
            <p>Виженка</p>
        </a>
        <a onClick={routeChange_2} className="kosiv-many-photos">
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000313-ef196ef198/700/P1700682.webp?ph=0025de801d" alt="" />
            <p>Чорногузи</p>
        </a>
        <a onClick={routeChange_3} className="kosiv-many-photos">
            <img src="https://i.ibb.co/2yNgw6Q/Google-Chrome.jpg" alt="" />
            <p>Іспас</p>
        </a>
        <a onClick={routeChange_4} className="kosiv-many-photos">
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000315-6916569167/700/P1660263.webp?ph=0025de801d" alt="" />
            <p>Вашківці</p>
        </a>
    </div>
  )
}
