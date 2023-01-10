
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Header from './components/Shared/Header';
import MainPage from './components/MainPage/MainPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main-block">
          <Routes>
            <Route path ="/" exact element = {<MainPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
