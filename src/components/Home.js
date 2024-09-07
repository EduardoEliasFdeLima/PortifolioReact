import React from 'react'
import '../styles/Home.css'
import MyFoto from '../images/Foto-eu.png'
import {ReactComponent as CodeIcon} from '../svgs/code-solid.svg'
import {ReactComponent as DonwIcon} from '../svgs/download-solid.svg'
import {ReactComponent as PinIcon} from '../svgs/location-dot-solid.svg'
import Curriculo from '../images/curriculo.pdf'

function Home() {
  return (
    <>
      <section className="main-contain" id="home">
         <div className='left-contain'>
            <img src={MyFoto} alt=""></img>
            <CodeIcon  className="icon-code"/>
         </div>
         <div className='right-contain'>
            <div className='text-rc'>
              <h1>Estudante Front-End <br/><span>&</span> UI design</h1>
             <p> <PinIcon className="local-pin"/> São José dos Campos, SP</p>
              <button className='btn'><a download href={Curriculo}>Baixar currículo <DonwIcon width="13px"/></a></button>
            </div>
            
         </div>

      </section>
      
    </>
  )
}

export default Home
