import React from 'react';
import './Footer.scss';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer class="footer">
      <div className="footer-info">
        <div class="row">
          <div className="some-links">
            <div class="footer-col">
              <h4>Швидкі посилання</h4>
              <ul>
                <li>
                  <Link to="/about-us">Про нас</Link>
                </li>
                <li>
                  <Link to="/about-hutsul">Про Гуцулів</Link>
                </li>
                <li>
                  <Link to="/contacts">Контакти</Link>
                </li>
                <li>
                  <Link to="/about-hutsul/%D1%81ustoms-and-ceremonies-of-the-hutsul-region">Звичаї та обряди Гуцулів</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Більше про Гуцулів</h4>
              <ul>
                <li>
                  <Link onTouchCancel="/kosiv-district">Косівський район</Link>
                </li>
                <li>
                  <Link to="/vuznutsa-district">Вижницький район</Link>
                </li>
                <li>
                  <Link to="/about-hutsul/what-did-the-hutsuls-believe">У що вірили Гуцули</Link>
                </li>
                <li>
                  <Link to="/about-hutsul/interesting-facts">Цікаві факти про Гуцулів</Link>
                </li>
              </ul>
            </div>
          
          </div>
        </div>
        <div className="map">
          <div className="kos-info">
            <p>
              78600, вул.Незалежності, 55, м.Косів, Івано-Франківської області
            </p>
            <a href="https://goo.gl/maps/vRm5CtBEgGwaUW1BA"><i class="fa-solid fa-location-dot"></i></a> 
          </div>
          <div className="vuz-info">
            <p>59200, вул. Д.Загула,13, м.Вижниця, Чернівецької області</p>
            <a href="https://goo.gl/maps/DBYz1HHQC9U3Ky8SA"><i class="fa-solid fa-location-dot"></i></a>
          </div>
        </div>
      </div>
        <div class="footer-col ">
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      
    </footer>
  );
}

export default Footer