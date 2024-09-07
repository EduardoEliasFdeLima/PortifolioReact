import React, {useEffect, useState} from 'react';
import '../styles/Projetos.css';
import CardProjetos from './CardProjetos';
import CardsProjetosDatas from '../data/dados-proj.json';
import ImagemFundo from '../images/fundoProj.png'

function Projetos() {

   const [cardproj, cardprojSet] = useState([]);

   useEffect (() =>{
        cardprojSet(CardsProjetosDatas);
   }, []);


  return (
    <>
      <section className='Proj' id="Proj">
        <h1>Projetos</h1>
        <p>Realizo alguns projetos pessoais  e disponibilizo no github os códigos , <b>clique</b> em qualquer um deles para acessar</p>
        <div className='row'>
            {cardproj.map(cardproj => (
                <CardProjetos key={cardproj.imagem} links={cardproj.link} imagem={cardproj.imagem} titulo={cardproj.titulo} text={cardproj.text} />
            ))}
        </div>
      </section>
    </>
  )
}

export default Projetos
