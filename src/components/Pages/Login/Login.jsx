import React, { useState } from "react";
import Header from "../../Atoms/Header/Header";
import Footer from "../../Atoms/Footer/Footer";
import './Login.css';

function Login() {
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
            <div className="form-container-login">
                <form action="a" className="form-centered" onSubmit={validarFormulario}>
                    <h1 className="login-title">Iniciar Sesión</h1>
                    
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

                    <button type="submit" className="ingresar-btn">Ingresar</button>
                    
                    <div className="no-account-container">
                        <p className="no-account">¿No tienes cuenta?</p>
                        <a href="/register" className="register-link">Registrarse</a>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Login;
