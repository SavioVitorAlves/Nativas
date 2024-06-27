import style from './Card.module.css'
function Card({img, nome, preco}){
    return(
        <div className={style.card}>
            <img src={img} alt="mel de abelha sem ferrão" />
            <header>{nome}</header>
            <div>
                <p>R$</p>
                <h2>{preco}</h2>
                <p>a unidade</p>
            </div>
        </div>
    )
}
export default Card