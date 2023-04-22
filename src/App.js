
import './App.scss';
import {BrowserRouter, ScrollRestoration} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Header from './components/Shared/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Shared/Footer';
import Contacts from './components/Contacts/Contacts';
import AboutUs from './components/AboutUs/AboutUs';
import AboutHutsul from './components/AboutHutsul/AboutHutsul';
import InterestingFacts from './components/AboutHutsul/InterestingFacts/InterestingFacts';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import HutsulCeremonies from './components/AboutHutsul/HutsulCeremonies/HutsulCeremonies';
import KosivDistrict from './components/KosivDistrict/KosivDistrict';
import HutsulBelieve from './components/AboutHutsul/HutsulBelieve/HutsulBelieve'
import MensFashion from './components/KosivDistrict/MensFashion/MensFashion';
import Outerwear from './components/KosivDistrict/Outerwear/Outerwear';
import WomensFashion from './components/KosivDistrict/WomensFashion/WomensFashion';
import AccessoriesAndShoes from './components/KosivDistrict/AccessoriesAndShoes/AccessoriesAndShoes';
import MorePhotos from './components/KosivDistrict/MorePhotos/MorePhotos';
import StaruyKosiv from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/StaruyKosiv';
import NewKosiv from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/NewAndOld/NewKosiv';
import OldKosiv from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/NewAndOld/OldKosiv';
import Verbovez from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/Verbovez';
import NewVerbovez from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/NewAndOld/NewVerbovez';
import OldVerbovez from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/NewAndOld/OldVerbovez';
import Cherganivka from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/Cherganivka';
import NewCherganivka from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/NewAndOld/NewCherganivka';
import OldCherganivka from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/NewAndOld/OldCherganivka';
import Smodna from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/Smodna';
import NewSmodna from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/NewAndOld/NewSmodna';
import OldSmodna from './components/KosivDistrict/MorePhotos/DifferentAreasPhoto/StaruyKosiv/NewAndOld/OldSmodna';
import VuznutsaDistrict from './components/VuznutsaDistrict/VuznutsaDistrict';
import PlaceInHutsul from './components/VuznutsaDistrict/PlaceInHutsul/PlaceInHutsul';
import Moda from './components/VuznutsaDistrict/Moda/Moda';
import Traditions from './components/VuznutsaDistrict/Traditions/Traditions';
import NewModa from './components/VuznutsaDistrict/NewModa/NewModa';
import MorePhotosV from './components/VuznutsaDistrict/MorePhotos/MorePhotosV';
import Vuzenka from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/Vuzenka';
import NewVuzenka from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/NewAndOld/NewVuzenka';
import OldVuzenka from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/NewAndOld/OldVuzenka';
import Chornoguzu from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/Chornoguzu';
import OldChornoguzu from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/NewAndOld/OldChornoguzu';
import NewChornoguzu from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/NewAndOld/NewChornoguzu';
import Ispas from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/Ispas';
import NewIspas from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/NewAndOld/NewIspas';
import OldIspas from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/NewAndOld/OldIspas';
import Vashkivtsy from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/Vashkivtsy';
import NewVashkivtsy from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/NewAndOld/NewVashkivtsy';
import OldVashkivtsy from './components/VuznutsaDistrict/MorePhotos/DifferentAreasPhoto/Areas/NewAndOld/OldVashkivtsy';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <div className="main-block">
          <Routes>
            <Route path ="/" exact element = {<MainPage />}/>
            <Route path='/about-us' exact element={<AboutUs />} />
            <Route path='/kosiv-district' exact element={<KosivDistrict />} />

            <Route path='/about-hutsul' exact element={<AboutHutsul />} />
            <Route path='/about-hutsul/interesting-facts' exact element={<InterestingFacts />} />
            <Route path='/about-hutsul/what-did-the-hutsuls-believe'  exact element={<HutsulBelieve /> } />
            <Route path='/about-hutsul/сustoms-and-ceremonies-of-the-hutsul-region' exact element={<HutsulCeremonies />} />
            <Route path='/kosiv-district/mens-fashion' exact element={<MensFashion />} />
            <Route path='/kosiv-district/outerwear' exact element ={<Outerwear />} />
            <Route path='/kosiv-district/womens-fashion' exact element ={<WomensFashion /> } />
            <Route path='/kosiv-district/accessories-and-shoes' exact element ={<AccessoriesAndShoes />} />
            <Route path='/kosiv-district/more-photos' exact element ={<MorePhotos /> } />

            <Route path='/kosiv-district/more-photos/staruy-kosiv' exact element ={<StaruyKosiv /> } />
            <Route path='/kosiv-district/more-photos/staruy-kosiv/new-kosiv' exact element ={<NewKosiv /> } />
            <Route path='/kosiv-district/more-photos/staruy-kosiv/old-kosiv' exact element ={<OldKosiv /> } />

            <Route path='/kosiv-district/more-photos/verbovez' exact element ={<Verbovez />} />
            <Route path='/kosiv-district/more-photos/verbovez/new-verbovez' exact element ={<NewVerbovez /> } />
            <Route path='/kosiv-district/more-photos/verbovez/old-verbovez' exact element ={<OldVerbovez /> } />
            
            <Route path='/kosiv-district/more-photos/cherganivka' exact element ={<Cherganivka /> } />
            <Route path='/kosiv-district/more-photos/cherganivka/new-cherganivka' exact element ={<NewCherganivka /> } />
            <Route path='/kosiv-district/more-photos/cherganivka/old-cherganivka' exact element ={<OldCherganivka /> } />

            
            <Route path='/kosiv-district/more-photos/smodna' exact element ={<Smodna />} />
            <Route path='/kosiv-district/more-photos/smodna/new-smodna' exact element ={<NewSmodna /> } />
            <Route path='/kosiv-district/more-photos/smodna/old-smodna' exact element ={<OldSmodna /> } />

            <Route path='/vuznutsa-district' exact element ={<VuznutsaDistrict />} />
            
            <Route path='/vuznutsa-district/place-in-hutsul' exact element={<PlaceInHutsul />} />
            <Route  path='/vuznutsa-district/moda' exact element={<Moda />} />
            <Route  path='vuznutsa-district/traditions' exact element={<Traditions />} />
            <Route  path='vuznutsa-district/new-moda' exact element={<NewModa />} />

            <Route  path='vuznutsa-district/more-photos' exact element={<MorePhotosV /> } />
            <Route  path='vuznutsa-district/more-photos/vuzenka' exact element={<Vuzenka /> } />
            <Route  path='vuznutsa-district/more-photos/new-vuzenka' exact element={<NewVuzenka /> } />
            <Route  path='vuznutsa-district/more-photos/old-vuzenka' exact element={<OldVuzenka /> } />

            <Route  path='vuznutsa-district/more-photos/chornoguzu' exact element={<Chornoguzu /> } />
            <Route  path='vuznutsa-district/more-photos/old-chornoguzu' exact element={<OldChornoguzu /> } />
            <Route  path='vuznutsa-district/more-photos/new-chornoguzu' exact element={<NewChornoguzu />} />

            <Route  path='vuznutsa-district/more-photos/ispas' exact element={<Ispas /> } />
            <Route  path='vuznutsa-district/more-photos/new-ispas' exact element={<NewIspas /> } />
            <Route  path='vuznutsa-district/more-photos/old-ispas' exact element={<OldIspas /> } />

            <Route  path='vuznutsa-district/more-photos/vashkivtsy' exact element={<Vashkivtsy /> } />
            <Route  path='vuznutsa-district/more-photos/new-vashkivtsy' exact element={<NewVashkivtsy /> } />
            <Route  path='vuznutsa-district/more-photos/old-vashkivtsy' exact element={<OldVashkivtsy /> } />


            <Route path='/contacts' exact element ={<Contacts />} />s
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
