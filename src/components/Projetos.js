import React, {useEffect, useState} from 'react';
import '../styles/Projetos.css';
import CardProjetos from './CardProjetos';
import CardsProjetosDatas from '../data/dados-proj.json';
import ImagemFundo from '../images/fundoProj.png'
import ScrollReveal from 'scrollreveal'

function Projetos() {

   const [cardproj, cardprojSet] = useState([]);

   useEffect (() =>{
        cardprojSet(CardsProjetosDatas);

        ScrollReveal().reveal('.slide-left', {
          duration: 800, // duração da animação (em ms)
          distance: '40px', // distância do deslocamento
          origin: 'left', // direção da animação (de baixo para cima)
          reset: true, // se true, a animação será repetida toda vez que o usuário rolar para fora e voltar
          easing: 'ease-in-out', // estilo de animação
        })
   }, []);


  return (
    <>
      <section className='Proj' id="Proj">
        <h1>Projetos</h1>
        <p>Esses são alguns dos projetos pessoais disponibilizados, <b>clique</b> em qualquer um deles para acessar a página com o código no github e link para acessar o site.</p>
        <div className='row slide-left'>
            {cardproj.map(cardproj => (
                <CardProjetos key={cardproj.imagem} links={cardproj.link} imagem={cardproj.imagem} titulo={cardproj.titulo} text={cardproj.text} />
            ))}
        </div>
      </section>
    </>
  )
}

export default Projetos
