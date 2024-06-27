import style from './Creator.module.css'
function Creator(){
    return (
        <header className={style.creator}>
            <div className={style.name}>
                <h2>Nome <br/> Principal</h2>
                <p>Formado em <br/> Apicultura UFNT</p>
            </div>
            <div className={style.spec}>
                <header>
                    apicultor, professor,<br/> pecuarista e empresario
                </header>
                <h5>
                    bslfçsdknfssndfsçlkdn
                </h5>
            </div>
        </header>
    )
}
export default Creator