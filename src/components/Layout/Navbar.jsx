import style from './Navbar.module.css'
import {Link} from 'react-router-dom'
import Container from'./Container'
function Navbar(){
    return( 
        <Container>
            <nav className={style.navbar}>
                <div>
                    <Link to="/">
                        LOGO
                    </Link>
                    
                </div>
                <ul>
                    <li>
                        <Link to="/envio">Envio</Link>
                    </li>
                    <li>
                        <a href="#Benefict">Beneficios</a> 
                    </li>
                    <li>
                        <a href="#Sobre">Sobre</a> 
                        
                    </li>
                    <li>
                        <a href="#Produtos">Produtos</a> 
                    </li>
                </ul>
            </nav>
        </Container>
    )
}
export default Navbar