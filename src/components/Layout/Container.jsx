import style from './Container.module.css'
function Container(pros){
    return(
        <div className={style.container}>{pros.children}</div>
    )
}
export default Container