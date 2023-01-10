import React from 'react'
import SliderApp from './components/SliderApp'
import './TraditionClothesVideo.scss'


function OurClients() {
  return (
    <div className='clients'>
        <div className='container'>
            <p className='clients__tittle'>Дізнавайся разом з нами більше про одягові традиції гуцульщини</p>
                <SliderApp />
        </div>
    </div>
  )
}

export default OurClients