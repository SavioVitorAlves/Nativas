import React, { useEffect } from 'react';
import style from './Header.module.css'
import img1 from '../../img/img-1.jpg'
import img2 from '../../img/img-2.jpg'
import img3 from '../../img/img-3.jpeg'

function Header(){
    useEffect(() => {
        const interval = setInterval(() => {
          const nextButton = document.getElementById('next');
          if (nextButton) {
            nextButton.click();
          }
        }, 10000);
    
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
      }, []);
    return (
          <header className={style.header}>         
          <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img className={style.config} src={img1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img className={style.config} src={img2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img className={style.config} src={img3} class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button id='next' class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </header>
    )
}
export default Header