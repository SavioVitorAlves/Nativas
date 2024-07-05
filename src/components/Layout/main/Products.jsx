import React from 'react';
import style from './Products.module.css'
// ----------importando as imagens -------------
import mel from '../../img/img-products/mel.jpg'
import atrativo from '../../img/img-products/atrativo.png'
import bombom_de_polem from '../../img/img-products/bombom_de_polem.jpg'
import caixa from '../../img/img-products/caixa.jpg'
import mel_uruçu from '../../img/img-products/mel_uruçu.jpg'
import propolis from '../../img/img-products/propolis.jpeg'

import comeia from '../../img/comeia.png'
import Card from '../../cards/Card'

function Products(){
    return (
        <section id="Produtos" className={style.products}>
            <header className={style.header}>  Nossos Produtos</header>
            <section className={style.grid}>
                <Card
                    img={mel_uruçu}
                    nome="Mel de Uruçu-Amarela"
                    preco="24,99"
                    
                />
                <Card
                    img={atrativo}
                    nome="Atrativos Para Capitura de Abelhas sem Ferrão"
                    preco="19,66"
                />
                <Card
                    img={bombom_de_polem}
                    nome="Bom Bom de Polem"
                    preco="39,90"
                />
                <Card
                    img={caixa}
                    nome="Caixa de Criação"
                    preco="49,50"
                />
                <Card
                    img={propolis}
                    nome="Propolis de Abelhas Nativas"
                    preco="45,50"
                />
                <Card
                    img={mel}
                    nome="Mel de Jatai 50ml"
                    preco="29,99"
                />
            </section>
            <img className={style.img} src={comeia} alt="caomeia de abelhas sem ferrão" />
        </section>
    )
}
export default Products