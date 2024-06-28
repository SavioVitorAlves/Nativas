import style from './Creator.module.css'
import apicultor from '../../img/apicultor.png'
function Creator(){
    return (
        <section id="Sobre" className={style.creator}>
            <div className={style.name}>
                <h2>José <br/> Bruno</h2>
                <div>
                    <span class="material-symbols-outlined">hive</span>
                    <p>Formado em <br/> Apicultura UFNT</p>
                </div>
                
            </div>
            <div className={style.spec}>
                <header>
                    meliponicultor, professor,<br/> pecuarista e empresario
                </header>
                <h5>
                José é um  meliponicultor dedicado que, além de cuidar das abelhas, é também um professor respeitado e empresário de sucesso. Com paixão pela educação e inovação, ele desenvolveu o método "Abelhas Sem Fumaça", revolucionando a  meliponicultura!
                </h5>
            </div>
            <img className={style.apic} src={apicultor} alt="" />
        </section>
    )
}
export default Creator