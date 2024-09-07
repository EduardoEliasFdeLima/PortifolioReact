import React from 'react'
import '../styles/Contato.css'
import {ReactComponent as LinkeIcon} from '../svgs/linkedin-brands-solid.svg'
import {ReactComponent as WhatsIcon} from '../svgs/whatsapp-brands-solid.svg'
import {ReactComponent as EmailIcon} from '../svgs/envelope-solid.svg'
import {ReactComponent as GithubIcon} from '../svgs/github-brands-solid.svg'


function Contato() {
  return (
    <>
      <section className="footer" id="Contato">
            <h1>Contato</h1>
            <div className='contato-contain'>
                <div className='contato-left'>
                    <p>Estou disponível para propostas. Entre em contato comigo</p>
                </div>
                <div className='contato-right'>
                    <ul>
                        <li><LinkeIcon className="icon-contato"/>  <a href='https://www.linkedin.com/in/eduardo-elias-4008422b7/' target='new_blank'>Eduardo Elias</a></li>
                        <li><GithubIcon className="icon-contato"/>  <a href='https://github.com/EduardoEliasFdeLima' target='new_blank'>EduardoEliasFdeLima</a></li>
                        <li><WhatsIcon className="icon-contato"/>  12 98297-6175</li>
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
