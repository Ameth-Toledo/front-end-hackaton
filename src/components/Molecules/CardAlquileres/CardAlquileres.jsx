import React from "react";
import './CardAlquileres.css';

function CardAlquileres({ imgSrc, nameInmobiliaria, price, description, location, phone }) {
    return (
        <div className="card-alquiler">
            <img src={imgSrc} alt="Imagen de la inmobiliaria" className="imagen-card-inmobiliaria" />
            <div className="card-alquiler-content">
                <h1 className="name-card-inmobiliaria">{nameInmobiliaria}</h1>
                <p className="description-inmobiliaria">{description}</p>
                <h2 className="location-card-inmobiliaria"><i className="fas fa-map-marker-alt"></i> {location}</h2>
                <h2 className="number-card-inmobiliaria"><i className="fas fa-phone"></i> {phone}</h2>
                <h2 className="price-card-inmobiliaria"><i className="fas fa-dollar-sign"></i> {price}</h2>
                <button className="card-inmobiliaria-btn">
                    <i className="fas fa-envelope"></i> Contactar
                </button>
            </div>
        </div>
    );
}

export default CardAlquileres;
