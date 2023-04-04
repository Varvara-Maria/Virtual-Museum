import React from 'react';
import MainScreen from './components/MainScreen';
import WhoWeAre from './components/WhoWeAre';
import Areas from './components/Areas';
import TraditionClothesVideo from './components/SliderApp/TraditionClothesVideo';
import Footer from '../Shared/Footer';
import HutsulTradition from './components/HutsulTradition';

function MainPage() {
  return (
    <div>
        <MainScreen />
        <WhoWeAre />
        <HutsulTradition />
        <TraditionClothesVideo />
        <Areas />

    </div>
  )
}

export default MainPage