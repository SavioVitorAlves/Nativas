import style from './Benefict.module.css'
function Benefict(){
    return (
        <div id="Benefict" className={style.benefict}>
            <div className={style.ben_item}>
                <div className={style.cicle}>
                </div>
                <h4>Antioxidantes</h4>
                <p>Rico em antioxidantes, que ajudam a combater os radicais livres 
                no corpo e podem reduzir o risco de doenças crônicas.</p>
           </div>
           
           <div className={style.ben_item}>
           <div className={style.cicle}>
                </div>
                <h4>Vitaminas e Minerais</h4>
                <p>Contém uma variedade de vitaminas (como a vitamina C e B) 
                e minerais (como o cálcio, ferro, potássio e magnésio).</p>
           </div>
           <div className={style.ben_item}>
           <div className={style.cicle}>
                </div>
                <h4>Facilita a Digestão</h4>
                <p>Pode ser mais fácil de digerir do que o mel convencional,
                sendo adequado para pessoas com problemas digestivos.</p>
           </div>
           <div className={style.ben_item}>
           <div className={style.cicle}>
                </div>
                <h4>Controle de Açúcar</h4>
                <p>Possui índice glicêmico mais baixo do que de abelhas com ferrão,
                melhor para pessoas que precisam monitorar seus níveis de açúcar.
               </p>
           </div>
        </div>
    )
}
export default Benefict