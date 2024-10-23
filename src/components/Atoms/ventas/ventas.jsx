import React, { useState } from 'react';
import './ventas.css'; 

const Ventas = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    imgSrc: null,
    nameInmobiliaria: '',
    price: '',
    description: '',
    location: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, imgSrc: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggleModal();
  };

  return (
    <div className='ventas-button'>
      <div className="fixed-component" onClick={toggleModal}>
        <i className='fas fa-home'></i>
      </div>

      {modalVisible && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={toggleModal}>&times;</span>
            <h2 className='modal-title'>Añadir Inmueble</h2>
            <form className='modal-form' onSubmit={handleSubmit}>
              {formData.imgSrc && (
                <img
                  src={formData.imgSrc}
                  alt="Previsualización de imagen"
                  className="image-preview"
                />
              )}
              <input 
                type="file" 
                name="imgSrc" 
                accept="image/*" 
                onChange={handleFileChange} 
                required 
                className='modal-input-file' 
              />
              <input 
                type="text" 
                name="nameInmobiliaria" 
                placeholder="Nombre Inmobiliaria" 
                value={formData.nameInmobiliaria} 
                onChange={handleInputChange} 
                required 
                className='modal-input'
              />
              <input 
                type="number" 
                name="price" 
                placeholder="Precio" 
                value={formData.price} 
                onChange={handleInputChange} 
                required 
                className='modal-input'
              />
              <input 
                type="text" 
                name="description" 
                placeholder="Descripción" 
                value={formData.description} 
                onChange={handleInputChange} 
                required 
                className='modal-input'
              />
              <input 
                type="text" 
                name="location" 
                placeholder="Ubicación" 
                value={formData.location} 
                onChange={handleInputChange} 
                required 
                className='modal-input'
              />
              <input 
                type="text" 
                name="phone" 
                placeholder="Teléfono" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
                className='modal-input'
              />
              <button type="submit" className='modal-submit'>Añadir Inmueble</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ventas;
