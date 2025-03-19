import React, {useEffect} from 'react'
import '../styles/Home.css'
import MyFoto from '../images/novo-eu.png'
import {ReactComponent as CodeIcon} from '../svgs/code-solid.svg'
import {ReactComponent as DonwIcon} from '../svgs/download-solid.svg'
import {ReactComponent as PinIcon} from '../svgs/location-dot-solid.svg'
import Curriculo from '../images/curriculo.pdf'
import ScrollReveal from 'scrollreveal'

function Home() {
  useEffect(() =>{
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
      <section className="main-contain" id="home">
         <div className='left-contain slide-left'>
            <img src={MyFoto} alt=""></img>
            <CodeIcon  className="icon-code"/>
         </div>
         <div className='right-contain slide-left'>
            <div className='text-rc'>
              <h1>Eduardo Elias! Front-End <br/><span>&</span> UI design</h1>
             <p> <PinIcon className="local-pin"/> São José dos Campos, SP</p>
              <button className='btn'><a download href={Curriculo}>Baixar currículo <DonwIcon width="13px"/></a></button>
            </div>
            
         </div>

      </section>
      
    </>
  )
}

export default Home
