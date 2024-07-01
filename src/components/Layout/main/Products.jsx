import React from 'react';
import style from './Products.module.css'
import mel from '../../img/img-products/mel.jpg'
import comeia from '../../img/comeia.png'
import Card from '../../cards/Card'

function Products(){
    return (
        <section id="Produtos" className={style.products}>
            <header className={style.header}>  Nossos Produtos</header>
            <section className={style.grid}>
                <Card
                    img={mel}
                    nome="Nome do Produto"
                    preco="49,50"
                    
                />
                <Card
                    img={mel}
                    nome="Nome do Produt"
                    preco="49,50"
                />
                <Card
                    img={mel}
                    nome="Nome do Produto"
                    preco="89,50"
                />
                <Card
                    img={mel}
                    nome="Nome do Produto"
                    preco="49,50"
                />
                <Card
                    img={mel}
                    nome="Nome do Produto"
                    preco="49,50"
                />
                <Card
                    img={mel}
                    nome="Nome do Produto"
                    preco="49,50"
                />
            </section>
            <img className={style.img} src={comeia} alt="caomeia de abelhas sem ferrão" />
        </section>
    )
}
export default Products