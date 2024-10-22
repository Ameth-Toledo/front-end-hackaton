import React, { useState } from "react";
import Header from "../../Atoms/Header/Header";
import Footer from "../../Atoms/Footer/Footer";
import './Register.css';

function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validarFormulario = (event) => {
        event.preventDefault(); 
    };

    return (
        <>
            <Header />
            <div className="form-container">
                <form action="a" className="form-centered" onSubmit={validarFormulario}>
                    <h1 className="login-title">Registrarse</h1>
                    
                    <div className="input-group">
                        <input 
                            type="text" 
                            id="name" 
                            className="input-group_input" 
                            required 
                        />
                        <label htmlFor="name" className="input-group_label">Ingrese su nombre</label>
                    </div>

                    <div className="input-group">
                        <input 
                            type="text" 
                            id="inmobiliaria" 
                            className="input-group_input" 
                            required 
                        />
                        <label htmlFor="inmobiliaria" className="input-group_label">Inmobiliaria</label>
                    </div>

                    <div className="input-group">
                        <input 
                            type="text" 
                            id="email" 
                            className="input-group_input" 
                            required 
                        />
                        <label htmlFor="email" className="input-group_label">Correo Electrónico</label>
                    </div>

                    <div className="input-group">
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            id="password" 
                            className="input-group_input" 
                            required 
                        />
                        <label htmlFor="password" className="input-group_label">Contraseña</label>
                        <i 
                            className={`fas fa-eye toggle-password ${passwordVisible ? "visible" : ""}`} 
                            onClick={togglePassword} 
                            aria-hidden="true"
                        ></i>
                    </div>

                    <div className="input-group">
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            id="password-confirm" 
                            className="input-group_input" 
                            required 
                        />
                        <label htmlFor="password-confirm" className="input-group_label">Confirmar Contraseña</label>
                        <i 
                            className={`fas fa-eye toggle-password ${passwordVisible ? "visible" : ""}`} 
                            onClick={togglePassword} 
                            aria-hidden="true"
                        ></i>
                    </div>

                    <button type="submit" className="ingresar-btn">Registrarse</button>
                    
                    <div className="no-account-container">
                        <p className="no-account">¿Ya tienes cuenta?</p>
                        <a href="/login" className="register-link">Login</a>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Register;
