import React from 'react'

function CardProjetos({links, imagem, titulo, text}) {
  return (
    <>
        <a href={links} target="new_blank">
            <div className='card-proj'>
                <img src={imagem} alt="Projeto1"/>
                <div className='text-card'>
                    <h3>{titulo}</h3>
                    <p>{text}</p>
                </div>     
            </div>
        </a>
    </>
  )
}

export default CardProjetos
