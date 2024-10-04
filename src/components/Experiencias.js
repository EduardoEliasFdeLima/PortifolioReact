import React, {useEffect} from 'react'
import '../styles/Experiencias.css'
import {ReactComponent as FolderIcon} from '../svgs/folder-solid.svg'
import {ReactComponent as BookIcon} from '../svgs/book-solid.svg'
import {ReactComponent as ToolIcon} from '../svgs/wrench-solid.svg'
import ScrollReveal from 'scrollreveal'

function Experiencias() {
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
      <section className='Expe' id="Expe">
          <div className='left-cont slide-left'>
            <h1>Experiência</h1>
            <p>Fui jovem aprendiz em <b>suporte de ti/infraestrutura</b> por 8 meses em uma rede de padarias</p>
            <p>Realizo pequenos projetos utilizando <b>HTML</b>, <b>CSS</b> e <b>JS</b>. Recentemente estou implementando projetos com <b>UI design</b> e <b>React</b>.</p>
            <div className='line' id="line"></div>
          </div>
          
          <div className='right-cont'>

            <div className='card slide-left'>
              <h3>2021 - TCC ConfeitaLibras</h3>
              <div className='txt-card'>
                <p>Realização de TCC para conclusão do curso técnico em informática no ano
                de 2021. Utilizando PHP, MySQL, HTML, CSS e JS.</p>
                <BookIcon className="icon-card"/>
              </div>
            </div>

            <div className='card slide-left'>  
              <h3>2022/atualmente - projetos pessoais</h3>
              <div className='txt-card'>
                <p>Faço diversos projetos pessoais utilizando HTML, CSS e JS. Disponibilizo tudo no meu 
                Github e pretendo fazer cada vez mais projetos.</p>
                <FolderIcon className="icon-card"/>
              </div>
            </div>

            <div className='card slide-left'>  
              <h3>2023 - jovem aprendiz de suporte de TI</h3>
              <div className='txt-card'>
                <p>Jovem Aprendiz por 8 meses na empresa OBA! é muito bom,  trabalhei como suporte
                de TI,  na infraestrutura e ganhei bastante experiências profissionais.</p>
                <ToolIcon className="icon-card"/>
              </div>
            </div>

          </div>
      </section>
    </>
  )
}

export default Experiencias
