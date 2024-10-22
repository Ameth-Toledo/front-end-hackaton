import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();

    const redirectAlquileres = () => {
        navigate('/alquileres');
    }

    const redirectHome = () => {
        navigate('/');
    }

    const redirectLogin = () => {
        navigate('/login');
    }

    return (
        <>
        <header className="header-donaciones">
            <img src="NextHome.svg" alt="Logo" className="logo-donaciones" />
            <ul className="nav-donaciones">
                <li className="nav-item" onClick={redirectHome}>Inicio</li>
                <li className="nav-item" onClick={redirectAlquileres}>Alquileres</li>
                <li className="nav-item">Nosotros</li>
            </ul>
            <button className="login-btn" onClick={redirectLogin}>Login</button>
        </header>
        </>
    )
}

export default Header;
