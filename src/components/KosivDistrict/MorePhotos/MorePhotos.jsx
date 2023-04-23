import React from 'react';
import './MorePhotos.scss';
import { useNavigate } from "react-router-dom";

export default function MorePhotos() {

    let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/kosiv-district/more-photos/staruy-kosiv`; 
      navigate(path);
    }

    const routeChange_2 = () =>{ 
      let path = `/kosiv-district/more-photos/verbovez`; 
      navigate(path);
    }

	const routeChange_3 = () =>{ 
		let path = `/kosiv-district/more-photos/cherganivka`; 
		navigate(path);
	}

	const routeChange_4 = () =>{ 
		let path = `/kosiv-district/more-photos/smodna`; 
		navigate(path);
	}

  return (
    <div className='more-photos'>
        <a  onClick={routeChange_1} className="kosiv-many-photos">
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000244-19dd819ddb/48407996_2257590394454671_6615744232919400448_n-2.jpg?ph=0025de801d" alt="photo of hutsul" />
            <p>Старий Косів</p>
        </a>
        <a onClick={routeChange_2} className="kosiv-many-photos">
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000291-b8f75b8f77/700/%D0%B2%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D0%B5%D1%86%D1%8C.webp?ph=0025de801d" alt="photo of hutsul" />
            <p>Вербовець</p>
        </a>
        <a onClick={routeChange_3} className="kosiv-many-photos">
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000293-d8f7fd8f81/28377656_605993746400853_7482814899950912055_n.webp?ph=0025de801d" alt="photo of hutsul" />
            <p>Черганівка</p>
        </a>
        <a onClick={routeChange_4} className="kosiv-many-photos">
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000292-c2b64c2b65/700/34074312_1766587090046819_6405160173920321536_o.webp?ph=0025de801d" alt="photo of hutsul" />
            <p>Смодна</p>
        </a>
    </div>
  )
}
