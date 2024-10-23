import React from "react";
import Header from "../../Atoms/Header/Header";
import './NotFound.css'; 
import Footer from "../../Atoms/Footer/Footer";

function NotFound() {
    return (
        <>
            <Header />
            <div className="not-found-container">
                <i className="fas fa-exclamation-triangle error-icon"></i>
                <h1 className="opps-error">Oops!</h1>
                <h1 className="error-code">404</h1>
                <h2 className="error-message">La ruta a la que intentas ingresar no existe.</h2>
            </div>
            <Footer/>
        </>
    );
}

export default NotFound;
