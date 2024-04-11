import React, { useEffect, useState } from 'react';
//import FilmeModelo from '../Data/FilmeModelo';
import axios from 'axios';

export default function Procurar() {

    

    return(
        <div style={{ backgroundImage: "url('../../templatemo_556_catalog_z/templatemo_556_catalog_z/img/hero.jpg')" }} className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" >
            <form className="d-flex tm-search-form">
                <input 
                className="form-control tm-search-input" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                name='title_cont'
                // onChange={Entrada}
                />
                <button className="btn btn-outline-success tm-search-btn" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
       </div>

    )
}