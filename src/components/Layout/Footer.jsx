import style from './Footer.module.css'
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
                        <p>saviovitor2@gmail.com</p>
                        <p>(63) 99108-0174</p>
                    </div>
                </div>
                <div>
                    <h6>Contato</h6>
                    <div>
                        <p>saviovitor2@gmail.com</p>
                        <p>(63) 99108-0174</p>
                    </div>
                </div>
                <div>
                    <h6>Social</h6>
                    <div>
                        <p>saviovitor2@gmail.com</p>
                        <p>(63) 99108-0174</p>
                    </div>
                </div>
                <div>
                    <h6>Localização</h6>
                    <div>
                        <p>saviovitor2@gmail.com</p>
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