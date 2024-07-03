import React from 'react'

function Banner() {
  return (
    <section className='banner-section'>
        <div className='banner-inf'>
          <div className='banner-title'>
            <h1>Front End</h1>
          </div>
          <div className='banner-subtitle'>
            <h2>Challenge React</h2>
          </div>
          <div className='banner-description'>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
          </div>
        </div>
        <div className='banner-img'>
          <div className='img-inset-shadow'>
            <img src='../img/banner-video.jpg' alt='Pensar como programador' />
            <div className='banner-img-shadow'></div>
          </div>
        </div>      
    </section>
  )
}

export default Banner