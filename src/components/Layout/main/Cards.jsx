
import style from './Cards.module.css';
// --------importando imagens ----------
import mel from '../../img/mel.png';
import ana_sousa from '../../img/img-pessoas/ana_sousa.png';
import beatriz_ferreira from '../../img/img-pessoas/beatriz_ferreira.png';
import carlos_lima from '../../img/img-pessoas/carlos_lima.png';
import felipe_martins from '../../img/img-pessoas/felipe_martins.png';
import joao_pereira from '../../img/img-pessoas/joao_pereira.png';
import luciana_almeida from '../../img/img-pessoas/luciana_almeida.png';
import mariana_santos from '../../img/img-pessoas/mariana_santos.png';
import rafael_oliveira from '../../img/img-pessoas/rafael_oliveira.png';
//----------lib do carrocel---------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // tamanho da tela
                settings: {
                    slidesToShow: 3, // quantidade de slides a mostrar
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }   
            },
            {
                breakpoint: 450, // tamanho da tela
                settings: {
                    slidesToShow: 1, // quantidade de slides a mostrar
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }   
            }
        ]
      };
 
    return (
        <div className={style.cards}>
            <div className={style.carousel} /*ref={carouselRef}*/>
               <Slider {...settings}>
                <div className={style.testemunho}>
                    <div className={style.cicle}><img src={ana_sousa} alt="clientes que compraram meu de abelha sem ferrão" /></div>
                    <h5>Ana Souza</h5>
                    <p>Comprei o mel de abelhas sem ferrão e fiquei maravilhada com o sabor. Além disso, senti uma melhora 
                    na minha digestão e disposição diária. Recomendo a todos!</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}><img src={carlos_lima} alt="clientes que compraram meu de abelha sem ferrão" /></div>
                    <h5>Carlos Lima</h5>
                    <p>O própolis de abelhas sem ferrão que comprei ajudou muito na minha imunidade. Desde que comecei a usar,
                    não peguei mais resfriados frequentes. Excelente produto!</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}><img src={mariana_santos} alt="clientes que compraram meu de abelha sem ferrão" /></div>
                    <h5>Mariana Santos</h5>
                    <p>Uso o mel de abelhas sem ferrão na minha rotina de cuidados com a pele e percebi uma grande diferença na
                    hidratação e cicatrização de pequenas feridas. É realmente incrível!</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}><img src={rafael_oliveira} alt="clientes que compraram meu de abelha sem ferrão" /></div>
                    <h5>Rafael Oliveira</h5>
                    <p>Minha esposa e eu adoramos o sabor único do mel de abelhas sem ferrão. Além disso, sentimos que nosso 
                    sistema imunológico está mais forte desde que começamos a consumir regularmente.</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}><img src={beatriz_ferreira} alt="clientes que compraram meu de abelha sem ferrão" /></div>
                    <h5>Beatriz Ferreira</h5>
                    <p>Depois de começar a usar os produtos de abelhas sem ferrão, minha energia aumentou e a saúde intestinal 
                    melhorou significativamente. Não troco por nada!</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}><img src={joao_pereira} alt="clientes que compraram meu de abelha sem ferrão" /></div>
                    <h5>João Pereira</h5>
                    <p>Sofria com problemas digestivos e o mel de abelhas sem ferrão foi uma solução natural e eficaz. 
                    Melhora minha digestão e ainda tem um sabor delicioso.</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}><img src={luciana_almeida} alt="clientes que compraram meu de abelha sem ferrão" /></div>
                    <h5>Luciana Almeida</h5>
                    <p>O pólen de abelhas sem ferrão que comprei trouxe muitos benefícios para minha saúde. Notei um aumento
                    na minha disposição e energia ao longo do dia.</p>
                    <div className={style.icones}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className={style.testemunho}>
                    <div className={style.cicle}><img src={felipe_martins} alt="clientes que compraram meu de abelha sem ferrão" /></div>
                    <h5>Felipe Martins</h5>
                    <p>Sou apaixonado por produtos naturais e o mel de abelhas sem ferrão superou minhas expectativas. Sinto-me
                    mais saudável e com mais energia desde que comecei a usar.</p>
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
