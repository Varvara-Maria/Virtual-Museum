import React, {useState} from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  
  const [state, setState] = useState();

  return (
    <div className='header'>
      <span className='header-logo'>  
        <a href="/">
          <img src="../../../img/logo.png" alt="" />
          <p>Одягові Традиції Гуцульщини</p>
        </a>
      </span>
      <nav role="navigation" class="primary-navigation">
        <ul>
          <li><NavLink activeClassName="active" to="/" onClick ={()=>setState(1)}>Головна</NavLink></li>
          <li><NavLink activeClassName="active" to="/about-us" onClick ={()=>setState(2)}>Про нас</NavLink></li>
          <li><NavLink activeClassName="active" class={(state == 3 || state == 4) && 'active-drop-down'}>Більше <i class="fa-solid fa-chevron-down"></i></NavLink>
            <ul class="dropdown">
              <li><NavLink id='kos' activeClassName="active" to="/kosiv-district" onClick ={()=>setState(3)}>Косівський район</NavLink></li>
              <li><NavLink id='vuz'activeClassName="active" to="/vuznutsa-district" onClick ={()=>setState(4)}>Вижницький район</NavLink></li>
            </ul>
          </li>
          <li><NavLink activeClassName='active' to='/about-hutsul' onClick ={()=>setState(5)}>Про Гуцулів</NavLink></li>
          <li><NavLink activeClassName="active" to="/contacts" onClick ={()=>setState(6)}>Контакти</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header