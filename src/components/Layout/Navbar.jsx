import style from './Navbar.module.css'
import {Link} from 'react-router-dom'
import Container from'./Container'
import React, { useRef } from 'react';
function Navbar(){
    
    const menuRef = useRef(null);
    const listaRef = useRef(null);

    function ativaMenu() {
        if (listaRef.current.style.display === 'none') {
            listaRef.current.style.display = 'block';
          } else {
            listaRef.current.style.display = 'none';
          }          
    }
    
    return( 
        <Container>
            <nav className={style.navbar}>
                <div>
                    <Link to="/">
                        LOGO
                    </Link>
                    
                </div>
                <span className="material-symbols-outlined" ref={menuRef} onClick={ativaMenu}>menu</span>
                <ul>
                    <li>
                        <Link to="/shipping">Envio</Link>
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
            <div className={style.menu_mobile} ref={listaRef} style={{ display: 'none' }}>
                <ul >
                    <li><a href="index.html#cabecalho">Home</a></li>
                    <li><a href="index.html#footer">Contato</a></li>
                    <li><a href="index.html#mapa">Localização</a></li>
                    <li><a href="index.html#historia">Sobre</a></li>
                    <li><a href="">Institucional</a></li>
                </ul>
            </div>
        </Container>
    )

}
export default Navbar