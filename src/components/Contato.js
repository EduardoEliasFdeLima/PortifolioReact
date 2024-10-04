import React, {useEffect} from 'react'
import '../styles/Contato.css'
import {ReactComponent as LinkeIcon} from '../svgs/linkedin-brands-solid.svg'
import {ReactComponent as WhatsIcon} from '../svgs/whatsapp-brands-solid.svg'
import {ReactComponent as EmailIcon} from '../svgs/envelope-solid.svg'
import {ReactComponent as GithubIcon} from '../svgs/github-brands-solid.svg'
import ScrollReveal from 'scrollreveal'


function Contato() {
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
      <section className="footer" id="Contato">
            <h1>Contato</h1>
            <div className='contato-contain slide-left'>
                <div className='contato-left'>
                    <p>Estou disponível para propostas. Entre em contato comigo</p>
                </div>
                <div className='contato-right'>
                    <ul>
                        <li><LinkeIcon className="icon-contato"/>  <a href='https://www.linkedin.com/in/eduardo-elias-4008422b7/' target='new_blank'>Eduardo Elias</a></li>
                        <li><GithubIcon className="icon-contato"/>  <a href='https://github.com/EduardoEliasFdeLima' target='new_blank'>EduardoEliasFdeLima</a></li>
                        <li><EmailIcon className="icon-contato"/>  edueuler.elias04@gmail.com</li>
                    </ul>
                </div>
            
            </div>
            <p id="cr">&copy; Programação e design por Eduardo Elias <br/> &copy; Icones por <a href='https://fontawesome.com/icons' target='new_blank'>FontAwesome</a></p>
            
      </section>
    </>
  )
}

export default Contato
