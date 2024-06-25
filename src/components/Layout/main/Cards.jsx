import style from './Cards.module.css'
import mel from '../../img/mel.png'
function Cards(){
    
    /*------- funções do carrousel --------*/
    
    /*let currentIndex = 0;
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    // Clonando os primeiros e últimos cards para criar um efeito infinito
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[totalCards - 1].cloneNode(true);

    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, cards[0]);

    // Atualizando o total de cards após a clonagem
    const allCards = document.querySelectorAll('.card');
    const totalCardsWithClones = allCards.length;

    const updateCarousel = () => {
        if (currentIndex === totalCards) {
            carousel.style.transition = 'none';
            currentIndex = 0;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else if (currentIndex === -1) {
            carousel.style.transition = 'none';
            currentIndex = totalCards - 1;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    document.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < totalCards) {
            currentIndex++;
            carousel.style.transition = 'transform 0.5s ease-in-out';
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        setTimeout(updateCarousel, 500);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > -1) {
            currentIndex--;
            carousel.style.transition = 'transform 0.5s ease-in-out';
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        setTimeout(updateCarousel, 500);
    });*/


    return (
        <div className={style.cards}>
            <div className={style.carousel}>
                <div className={style.testemunho}>
                    <div className={style.cicle}>

                    </div>
                    <h5>Nome fulano</h5>
                    <p>fsldjfslkdnkfdnfsdsdsdfsadfsadsdsdsdfgfsdsdfggrgsgfdsgsadgsgsgsfgsdfsfsdfasdfas</p>
                    <div>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                    </div>
            </div>
            <div className={style.testemunho}>
                    <div className={style.cicle}>

                    </div>
                    <h5>Nome fulano</h5>
                    <p>fsldjfslkdnkfdnfsdsdsdfsadfsadsdsdsdfgfsdsdfggrgsgfdsgsadgsgsgsfgsdfsfsdfasdfas</p>
                    <div>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                    </div>
            </div>
            <div className={style.testemunho}>
                    <div className={style.cicle}>

                    </div>
                    <h5>Nome fulano</h5>
                    <p>fsldjfslkdnkfdnfsdsdsdfsadfsadsdsdsdfgfsdsdfggrgsgfdsgsadgsgsgsfgsdfsfsdfasdfas</p>
                    <div>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                    </div>
            </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}>

                    </div>
                    <h5>Nome fulano</h5>
                    <p>fsldjfslkdnkfdnfsdsdsdfsadfsadsdsdsdfgfsdsdfggrgsgfdsgsadgsgsgsfgsdfsfsdfasdfas</p>
                    <div>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}>

                    </div>
                    <h5>Nome fulano</h5>
                    <p>fsldjfslkdnkfdnfsdsdsdfsadfsadsdsdsdfgfsdsdfggrgsgfdsgsadgsgsgsfgsdfsfsdfasdfas</p>
                    <div>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                    </div>
                </div>
            </div>
            <button className={style.prev}>&#10094;</button>
            <button className={style.next}>&#10095;</button>
            <img src={mel} alt="mel de abelha sem ferrão" />
        </div>
    )
}
export default Cards