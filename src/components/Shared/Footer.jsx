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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10612.517232214535!2d25.092293!3d48.319595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4fdcf4f1bf7ee046!2z0JrQntCh0IbQktCh0KzQmtCY0Jkg0JzQo9CX0JXQmSDQndCQ0KDQntCU0J3QntCT0J4g0JzQmNCh0KLQldCm0KLQktCQINCGINCf0J7QkdCj0KLQoyDQk9Cj0KbQo9Cb0KzQqdCY0J3QmA!5e0!3m2!1sru!2sus!4v1673539782050!5m2!1sru!2sus"
              width="250"
              height="150"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="vuz">
            <p>59200, вул. Д.Загула,13, м.Вижниця, Чернівецької області</p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10627.676139403038!2d25.192203!3d48.246686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x34f4bb759efa7f11!2sVyzhnyts%CA%B9kyy%20Koledzh%20Prykladnoho%20Mystetstva%20Im.%20V.yu.%20Shkriblyaka!5e0!3m2!1sru!2sus!4v1673544051529!5m2!1sru!2sus" 
              width="250" 
              height="150" 
              allowfullscreen="" 
              loading="lazy"
               referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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