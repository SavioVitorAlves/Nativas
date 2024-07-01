import style from './Vendas.module.css'

import { useLocation } from 'react-router-dom';
function Vendas(){
    const location = useLocation();
    const data = location.state;
    

    return(
        <div className={style.vendas}>
            {data ? (

            <>
            <img src={`${data.img}`} alt="Mel de abela Uruçu Amarela" />
            <div className={style.neg}>
                <div className={style.text}>
                <h3>{`${data.name}`}</h3>
                <div className={style.val}>
                    <p>R$</p>
                    <h2>{`${data.preco}`}</h2>
                </div>
                <div className={style.cep}>
                    <input type="text" />
                    <button>Buscar</button>
                </div>
                <p>chegara dia 25</p>
                <div className={style.estoque}>
                    <h4>11</h4>
                    <p>Em estoque</p>
                </div>
                <div className={style.qtd}>
                    <h5>Quantidade:</h5>
                    <input type="number" />
                </div>
                <input type="email" placeholder='Seu Email'/>
                </div>
                <button className={style.button}>COMPRAR</button>
            </div>
            </>
            ) : (
                <p>No data passed</p>
              )}
        </div>
    )
}
export default Vendas