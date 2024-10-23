import React from "react";
import './CardSearch.css';

function CardSearch() {
    return (
        <div className="card-alquiler-container">
            <div className="card-alquiler-content-container">
                <h1 className="alquiler-notification-title">¿Desea recibir notificaciones?</h1>
                
                <div className="alquiler-options-container">
                    <button className="alquiler-option-btn">Sí</button>
                    <button className="alquiler-option-btn">No</button>
                </div>

                <h1 className="alquiler-budget-title">Escriba su presupuesto</h1>
                
                <input type="text" className="alquiler-custom-input" placeholder="Presupuesto" />

                <h1 className="alquiler-features-title">Escriba las características que busca</h1>
                
                <input type="text" className="alquiler-custom-input" placeholder="Características" />
                
                <h1 className="alquiler-location-title">Escriba la ubicación</h1>
                
                <input type="text" className="alquiler-custom-input" placeholder="Ubicación" />

                <button className="alquiler-submit-btn">
                    <i className="fas fa-envelope"></i> Buscar
                </button>
            </div>
        </div>
    );
}

export default CardSearch;