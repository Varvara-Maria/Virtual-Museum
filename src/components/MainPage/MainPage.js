import React from 'react';
import MainScreen from './components/MainScreen';
import WhoWeAre from './components/WhoWeAre';
import Areas from './components/Areas';
import TraditionClothesVideo from './components/SliderApp/TraditionClothesVideo';
import Footer from '../Shared/Footer';

function MainPage() {
  return (
    <div>
        <MainScreen />
        <WhoWeAre />
        <TraditionClothesVideo />
        <Areas />
        <Footer />
    </div>
  )
}

export default MainPage