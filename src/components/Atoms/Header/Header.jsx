import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const redirectAlquileres = () => {
        navigate('/alquileres');
    }

    const redirectHome = () => {
        navigate('/');
    }

    const redirectLogin = () => {
        navigate('/login');
    }

    const redirectSearch = () => {
        navigate('/search');
    }

    const isActive = (path) => {
        return location.pathname === path ? 'nav-item active' : 'nav-item';
    }

 
    return (
        <>
        <header className="header-donaciones">
            <img src="NextHome.svg" alt="Logo" className="logo-donaciones" />
            <h1 className="nexthome">Next<span className="color-next" onClick={redirectHome} >Home</span></h1>
            <ul className="nav-donaciones">
                <li className={isActive('/')} onClick={redirectHome}>Inicio</li>
                <li className={isActive('/alquileres')} onClick={redirectAlquileres}>Alquileres</li>
                <li className="nav-item">Nosotros</li>
                <li className={isActive('/search')} onClick={redirectSearch}>Búsqueda</li>
            </ul>
            {/*<button className="login-btn" onClick={redirectLogin}>Login</button>*/}
        </header>
        </>
    )
}

export default Header;
