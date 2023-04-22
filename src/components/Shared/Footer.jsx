import React from 'react';
import './Footer.scss'

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
                  <a href="http://localhost:3000/about-us">Про нас</a>
                </li>
                <li>
                  <a href="http://localhost:3000/about-hutsul">Про Гуцулів</a>
                </li>
                <li>
                  <a href="http://localhost:3000/contacts">Контакти</a>
                </li>
                <li>
                  <a href="http://localhost:3000/about-hutsul/%D1%81ustoms-and-ceremonies-of-the-hutsul-region">Звичаї та обряди Гуцулів</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Більше про Гуцулів</h4>
              <ul>
                <li>
                  <a href="http://localhost:3000/kosiv-district">Косівський район</a>
                </li>
                <li>
                  <a href="#">Вижницький район</a>
                </li>
                <li>
                  <a href="http://localhost:3000/about-hutsul/what-did-the-hutsuls-believe">У що вірили Гуцули</a>
                </li>
                <li>
                  <a href="http://localhost:3000/about-hutsul/interesting-facts">Цікаві факти про Гуцулів</a>
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