import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-donaciones">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="NextHome.svg" alt="Logo ChiapaScript" className="footer-logo-image" />
                    <h1 className="chiapaScript-footer">NextHome</h1>
                </div>
                <div className="footer-newsletter">
                    <h4>Suscríbete a Nuestro Boletín</h4>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Tu correo electrónico" className="newsletter-input" required />
                        <button type="submit" className="newsletter-button">Suscribirse</button>
                    </form>
                </div>
                <div className="footer-icons">
                    <a href="https://github.com/Ameth-Toledo" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://x.com/Ameth_Toledo" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 <span className="footer-company">NextHome</span>. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
