import React from "react";
import Header from "../../Atoms/Header/Header";
import Footer from "../../Atoms/Footer/Footer";
import './Search.css';

function Search() {
    return (
        <>
        <Header/>
            <div className="side-bar">
                <ul className="side-bar-options">
                    <li className="option-side">
                        Casas
                    </li>
                    <li className="option-side">
                        Departamentos
                    </li>
                    <li className="option-side">
                        <i className="">Habitacion Individual</i>
                    </li>
                    <li className="option-side">
                        <i className="">h</i>
                    </li>
                </ul>
            </div>
            <div className="">
                <form action="">
                    <input type="combobox" />
                </form>
            </div>
        <Footer/>
        </>
    )
}

export default Search;