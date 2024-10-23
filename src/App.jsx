import React from 'react';
import './App.css';
import Header from './components/Atoms/Header/Header';
import Footer from './components/Atoms/Footer/Footer';
import CardHome from './components/Molecules/CardHome/CardHome';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const redirectCasas = () => {
    navigate(['/alquileres']);
  }

  return (
    <>
      <Header />
      <section className='hero-banner'>
        <img src="banner.png" alt="banner-donaciones" className="banner-adopciones" />
        <div className="hero-text">
          <h1 className="welcome-tittle">¡Bienvenido!</h1>
          <h2 className="description-banner">
            En <span className='nexthome-color'>NextHome</span> te ayudamos a encontrar un hogar cómodo, seguro y económico
          </h2>
          <img src="NextHome.svg" alt="logotipo" className='logotipo-next'/>
          <button className='comenzar-btn'>
              Comenzar <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      <div className='card-home-container'>
        <CardHome srcImage="https://cdn.hometogo.net/medium/e_v5/6d5/223/7592a0951418886f7f58a1d60d.jpg" tittle="Casa en la playa" ubication="Playa del Carmen" />
        <CardHome srcImage="https://http2.mlstatic.com/D_NQ_NP_2X_617053-MLM75812383716_042024-N.webp" tittle="Casa en la ciudad" ubication="Ciudad de México" />
        <CardHome srcImage="https://realestatemarket.com.mx/images/2024/01-enero/06/Cuatro-ventajas-de-vivir-en-una-casa-de-campo.jpg" tittle="Casa en el campo" ubication="San Miguel de Allende" />
      </div>

      <section className='info-section'>
        <div className='container-home'>
          <h1 className='info-title'>NextHome</h1>
          <p className='info-description'>Explora las mejores opciones para encontrar el hogar de tus sueños. Nuestro objetivo es brindarte el mejor servicio y acompañarte en cada paso del proceso.</p>
          <button className='cta-button' onClick={redirectCasas}>Explorar propiedades</button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App;
