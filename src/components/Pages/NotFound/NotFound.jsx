import React from "react";
import Header from "../../Atoms/Header/Header";

function NotFound() { 
    return (
        <>
        <Header/>
        <h1 className="opps-error">Opps</h1>
        <h1 className="error">404</h1>
        <i className="fab fa-warning"></i>
        <h2 className="">La ruta a la que intentas ingresar, no existe</h2>
        </>
    )
}

export default NotFound;