import React, {useEffect} from 'react'
import '../styles/Formacao.css'
import {ReactComponent as BookOpenIcon} from '../svgs/book-open-solid.svg'
import {ReactComponent as LanguageIcon} from '../svgs/language-solid.svg'
import ScrollReveal from 'scrollreveal'

function Formacao() {
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
      <section className='Forma' id="Forma">
        <div className='forma-left slide-left'>    
            <h1>Formação</h1>
            <p><b>Curso técnico</b> em informática pela univap unidade centro e <b>ensino superior</b> completo em Sistemas para Internet no Senac. <b>Cursos intensivos</b> na origamid em 2023 para ganhar mais conhecimento na área.</p>
            <div className='blocks'>
                <div className='block'>
                    <h2>Curso técnico</h2>
                    <h1>informática</h1>
                    <div className='line-block'></div>
                    <h3>2019 - 2021</h3>
                    <p>Univap - centro</p>
                </div>
                <div className='block'>
                    <h2>Tecnólogo</h2>
                    <h1>Sistemas para internet</h1>
                    <div className='line-block'></div>
                    <h3>2022 - 2024</h3>
                    <p>Senac</p>
                </div>
            </div>
        </div>
        <div className='forma-right slide-left'>
            <div className='lists'>
                <h2><BookOpenIcon className="icon-list"/> Cursos intensivos</h2>
                <ul>
                    <li><a href='https://drive.google.com/file/d/1hCeUS91NQJQe0-RC6U-JCB9atAVHURWL/view?usp=sharing' target='new_blank'>React Completo................................................................36horas</a></li>
                    <li><a href='https://drive.google.com/file/d/1_jQCCE1FDiN4DDIcGcF52SPG_7JDGd0d/view?usp=sharing' target='new_blank'>UI Design para Iniciantes...............................................34horas</a></li>
                    <li><a href='https://drive.google.com/file/d/1N_rbdb0MvqnaIQ_CpUhJcC6lB1-yEX1Z/view?usp=sharing' target='new_blank'>HTML: Introdução a páginas webs...............................30horas</a></li>
                    <li><a href='https://drive.google.com/file/d/1gs4BlQBD9pI1HthaLVmY_kkWefoARubQ/view?usp=sharing' target='new_blank'>HTML: Tabelas e formulários.........................................20horas</a></li>
                    <li><a href='https://drive.google.com/file/d/17yJ1UnJOBKRPzI6Wp9laxj0l3HpETsC2/view?usp=sharing' target='new_blank'>CSS: folhas de estilo........................................................30horas</a></li>
                </ul>
            </div>
            <div className='lists'>
                <h2><LanguageIcon className="icon-list" /> Idiomas</h2>
                <ul>
                    <li>Inglês - intermediário</li>
                    <li>Português - Nativo/fluente</li>
                </ul>
            </div>
        </div>
      </section>
           
    </>
  )
}

export default Formacao

