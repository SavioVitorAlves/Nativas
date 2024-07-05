import style from './Footer.module.css'
import {Link} from 'react-router-dom'
import masatercard from '../img/mastercard.png'
import pagbank from '../img/pagbank.png'
import visa from '../img/visa.jpeg'
function Footer(){
    return( 
        <footer className={style.footer}>
            <div className={style.info}>
                <div>
                    <h6>Institucional</h6>
                    <div>
                        <ul>
                            <li>
                                <Link to="/shipping">Envio</Link>
                            </li>
                            <li>
                                <a href="#Benefict">Beneficios</a> 
                            </li>
                            <li>
                                <a href="#Sobre">Sobre</a> 
                                
                            </li>
                            <li>
                                <a href="#Produtos">Produtos</a> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h6>Contato</h6>
                    <div>
                    <div className={style.contents}>
                        <span class="material-symbols-outlined">mail</span><p>saviovitor2@gmail.com</p>
                    </div>
                    <div className={style.contents}>
                        <span class="material-symbols-outlined">phone_in_talk</span><p>(63) 99108-0174</p>
                    </div>
                    </div>
                </div>
                <div>
                    <h6>Social</h6>
                    <div className={style.social}>
                        <a href="https://www.instagram.com/saviovitoralves/"><i className="fa-brands fa-instagram fa-xl" style={{ color: '#ffffff' }}></i></a>
                        <a href="https://www.linkedin.com/in/saviovitoralves/"><i className="fa-brands fa-linkedin fa-xl" style={{ color: '#ffffff' }}></i></a>
                        <a href="https://github.com/SavioVitorAlves"><i className="fa-brands fa-github fa-xl" style={{ color: '#ffffff' }}></i></a>
                        <a href=""><i className="fa-brands fa-whatsapp fa-xl" style={{ color: '#ffffff' }}></i></a>
                    </div>
                </div>
                <div>
                    <h6>Localização</h6>
                    <div>
                        <p>Avenida 14 de Dezembro, 258 - Belo Horizonte <br /> Minas Gerais</p>
                        <p>(63) 99108-0174</p>
                    </div>
                </div>
            </div>
            <div className={style.cartoes}>
                <p>Nativas &copy; 2024</p>
                <div className={style.img}>
                    <img src={masatercard} alt="" />
                    <img src={pagbank} alt="" />
                    <img src={visa} alt="" /> 
                </div>
            </div>
        </footer>
    )

}
export default Footer