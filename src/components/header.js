import React, {useEffect, useState} from 'react'
import Imgg from '../images/logo.png'
import '../styles/header.css'

var flag = 0;
function handleClick(){
   
   const mn = document.getElementById("links_menu");
   const menu = document.getElementById("menu");
  

   if(flag == 0){
      flag = 1;
      menu.classList.remove("menu");
      menu.classList.add("menux");
      return mn.style.top = '38px';
   }else{
      flag = 0;
      menu.classList.remove("menux");
      menu.classList.add("menu");
      return mn.style.top = '-1000%'; 
   }
  
}


const Header = () => {

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const headerItems = document.querySelectorAll('.header-item');
        const header = document.querySelector('header');

        const handleScroll = () => {
            const scrollPosition = window.scrollY - header.offsetHeight;

            let newActiveIndex = 0;

            sections.forEach((section, i ) => {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY - 160;
                const sectionBottom = sectionTop + section.offsetHeight;
               

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    newActiveIndex = i;
                    return false; // Termina o loop forEach
                }
            });

            // Atualiza o índice ativo
            setActiveSectionIndex(newActiveIndex);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup - remove o listener de scroll quando o componente desmontar
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez

    useEffect(() => {
        const headerItems = document.querySelectorAll('.header-item');

        headerItems.forEach((item, i) => {
            item.classList.toggle('ativo', i === activeSectionIndex);
        });
    }, [activeSectionIndex]); // Executa sempre que activeSectionIndex mudar







  return (
    <>
    
      <header>
     
        <div className='logo'>
            <a href='#home' className='header-item'><img src={Imgg} alt=""></img></a>
        </div>
        <ul id="links_menu">
            <li className='header-item'><a href='#Expe' onClick={handleClick}>Experiência</a></li>
            <li className='header-item'><a href='#Forma'onClick={handleClick} >Formação</a></li>
            <li className='header-item'><a href='#Proj' onClick={handleClick}>Projetos</a></li>
            <li className='header-item'><a href='#Contato' onClick={handleClick}>Contato</a></li>
            
        </ul>
        <div className='menu' id="menu" onClick={handleClick}>
          
        </div>
      </header>
    </>
   
  )
}

export default Header;
