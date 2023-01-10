import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className='header'>
      <span className='header-logo'>  
        <a href="">
          <img src="../../../img/logo.png" alt="" />
          <p>Одягові Традиції Гуцульщини</p>
        </a>
      </span>
      <nav role="navigation" class="primary-navigation">
        <ul>
          <li><a href="#">Головна</a></li>
          <li><a href="#">Про нас</a></li>
          <li><a href="#">Більше <i class="fa-solid fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a id='kos' href="#">Косівський район</a></li>
              <li><a id='vuz' href="#">Вижницький район</a></li>
            </ul>
          </li>
          <li><a href="#">Традиції гуцулів</a></li>
          
          <li><a href="#">Контакти</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header