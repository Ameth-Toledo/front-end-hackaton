import React from "react";
import { useNavigate } from "react-router-dom";
import './CardHome.css'; 

function CardHome({ srcImage, tittle, ubication, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <>
      <div className="card-home">
        <img src={srcImage} alt={tittle} className="card-image"/>
        <div className="card-content">
          <h2 className="card-title">{tittle}</h2>
          <div className="card-info">
            <i className="fas fa-map-marker-alt card-icon"></i>
            <p className="card-location">{ubication}</p>
          </div>
          <div className="card-icons">
            <i className="fas fa-bed card-icon"></i>
            <i className="fas fa-bath card-icon"></i>
            <i className="fas fa-car card-icon"></i>
          </div>
          <a className="see-more-link" onClick={handleClick}>Ver más...</a>
        </div>
      </div>
    </>
  );
}

export default CardHome;
