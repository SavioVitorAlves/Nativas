import style from './Card.module.css'
import { useNavigate } from 'react-router-dom';
function Card({img, nome, preco}){
    const navigate = useNavigate();

    const handleClick = () => {
        // Informações a serem passadas para a próxima página
        const data = { img: img, name: nome, preco: preco };

        // Redireciona para a página de Vendas
        navigate('/sale', { state: data });
    };

    return(
        <div className={style.card} onClick={handleClick}>
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