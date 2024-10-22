import React from 'react'
import './App.css'
import Header from './components/Atoms/Header/Header'
import Footer from './components/Atoms/Footer/Footer'

function App() {
  return (
    <>
<div className='header-donaciones-class'>
        <Header />
      </div>

      <img src="banner.png" alt="banner-donaciones" className="banner-adopciones" />
      <h1 className="welcome-tittle">¡Bienvenido!</h1>
      <h2 className="description-banner">En <span className='nexthome-color'>NextHome</span> te ayudamos a encontrar un hogar comodo, seguro y economico</h2>
      
      {/*seccion*/}

      <div className='container-home'></div>
      <h1>kk</h1>
    <Footer/>
    </>
  )
}

export default App
