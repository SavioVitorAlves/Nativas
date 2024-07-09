import style from './SalesArea.module.css'
import variedades from '../../img/variedades.png'
import jatai from '../../img/abelha.png'
import mel_uruçu from '../../img/img-products/mel_uruçu.jpg'
import {useNavigate} from 'react-router-dom'
function SalesArea(){
    
    const navigate = useNavigate();
    const titulo = "Mel de Abelha Uruçu";
    const price = "39,99";

    const handleClick = () => {
        // Informações a serem passadas para a próxima página
        const data = { img: mel_uruçu, name: titulo, preco: price };
        
        // Redireciona para a página About
        navigate('/sale', { state: data });
    };

    return (
        <section className={style.salesarea}>
            <img  src={variedades} alt="variedades de produtos de abelhas sem ferrão" />
            <div className={style.div}>
                <h1>Mel de Uruçu-Amarela</h1>
                <h3>mais de 12 tipos de<br/>beneficios diferentes</h3>
                <button className={style.button} onClick={handleClick}>adquira o seu</button>
            </div>
            <img className={style.jatai} src={jatai} alt="" />
        </section>
    )
}
export default SalesArea