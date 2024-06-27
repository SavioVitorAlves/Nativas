import style from './SalesArea.module.css'
import variedades from '../../img/variedades.png'
import jatai from '../../img/abelha.png'
function SalesArea(){
    return (
        <section className={style.salesarea}>
            <img src={variedades} alt="variedades de produtos de abelhas sem ferrão" />
            <div>
                <h1>Mel de Uruçu-Amarela</h1>
                <h3>mais de 12 tipos de<br/>beneficios diferentes</h3>
                <button className={style.button}>adquira o seu</button>
            </div>
            <img className={style.jatai} src={jatai} alt="" />
        </section>
    )
}
export default SalesArea