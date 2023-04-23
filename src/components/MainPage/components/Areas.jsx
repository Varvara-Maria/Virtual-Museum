import React from 'react';
import './Areas.scss';
import { useNavigate } from "react-router-dom";

function Areas() {

  let navigate = useNavigate(); 
  const routeChange_1 = () =>{ 
    let path = `/kosiv-district`; 
    navigate(path);
  }

  const routeChange_2 = () =>{ 
    let path = `/vuznutsa-district`; 
    navigate(path);
  }

  return (
    <div className='areas'>
        <a href="" onClick={routeChange_1}>
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000028-002d8002da/700/skansen05-696x464.jpg?ph=0025de801d" alt="hutsul clothes" />
            <h1>Косівський район Івано-Франківської області</h1>
        </a>
        <a href="" onClick={routeChange_2}>
            <img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000010-8b6dc8b6de/P1750294.JPG?ph=0025de801d" alt="hutsul clothes" />
            <h1>Вижницький район Чернівецької області</h1>
        </a>
    </div>
  )
}

export default Areas