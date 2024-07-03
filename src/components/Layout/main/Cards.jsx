import React, { useEffect, useRef } from 'react';
import style from './Cards.module.css';
import mel from '../../img/mel.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    /*  const carouselRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    useEffect(() => {
        const initializeCarousel = () => {
            const carousel = carouselRef.current;
            const prevButton = prevButtonRef.current;
            const nextButton = nextButtonRef.current;

            if (!carousel || !prevButton || !nextButton) {
                console.error("Elementos não encontrados.");
                return;
            }

            const cards = carousel.querySelectorAll(`.${style.testemunho}`);
            const totalCards = cards.length;

            if (totalCards > 0) {
                // Clonando os primeiros e últimos cards para criar um efeito infinito
                const firstClone = cards[0].cloneNode(true);
                const lastClone = cards[totalCards - 1].cloneNode(true);

                carousel.appendChild(firstClone);
                carousel.insertBefore(lastClone, cards[0]);

                let currentIndex = 0;
                const cardWidth = cards[0].offsetWidth;

                const updateCarousel = () => {
                    if (currentIndex === totalCards) {
                        carousel.style.transition = 'none';
                        currentIndex = 0;
                        carousel.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
                    } else if (currentIndex === -1) {
                        carousel.style.transition = 'none';
                        currentIndex = totalCards - 1;
                        carousel.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
                    }
                };

                nextButton.addEventListener('click', () => {
                    if (currentIndex < totalCards) {
                        currentIndex++;
                        carousel.style.transition = 'transform 0.5s ease-in-out';
                        carousel.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
                    }
                    setTimeout(updateCarousel, 500);
                });

                prevButton.addEventListener('click', () => {
                    if (currentIndex > -1) {
                        currentIndex--;
                        carousel.style.transition = 'transform 0.5s ease-in-out';
                        carousel.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
                    }
                    setTimeout(updateCarousel, 500);
                });

                // Set initial position to show the first card
                carousel.style.transform = `translateX(-${cardWidth}px)`;
            } else {
                console.error("Nenhum elemento com a classe .testemunho foi encontrado.");
            }
        };

        setTimeout(initializeCarousel, 0); // Executar após a montagem completa
    }, []);*/

    return (
        <div className={style.cards}>
            <div className={style.carousel} /*ref={carouselRef}*/>
               <Slider {...settings}>
                <div className={style.testemunho}>
                    <div className={style.cicle}></div>
                    <h5>Joao</h5>
                    <p>Texto do testemunho</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}></div>
                    <h5>pedro</h5>
                    <p>Texto do testemunho</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}></div>
                    <h5>Thiago</h5>
                    <p>Texto do testemunho</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}></div>
                    <h5>tito</h5>
                    <p>Texto do testemunho</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}></div>
                    <h5>matheus</h5>
                    <p>Texto do testemunho</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                </Slider>
                {/* Repita os elementos .testemunho conforme necessário */}
            </div>
            {/*<button className={style.prev} /*ref={prevButtonRef}>&#10094;</button>*/}
            {/*<button className={style.next} /*ref={nextButtonRef}>&#10095;</button>*/}
            <img src={mel} alt="mel de abelha sem ferrão" />
        </div>
    );
}

export default Cards;
