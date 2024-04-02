import React from 'react';
//import { BrowserRouter, Routes, Route } from "react-router-dom"
import Titulo from '../Components/Titulo';
import Procurar from '../Components/Procurar';
import Galeria from '../Components/Galeria';
import Footer from '../Components/Footer';


const Rotas = () => {
    return (
        <>
            <Titulo/>      
            <Procurar/>
            <Galeria/>
            <Footer/>
        </>
    );
}

export default Rotas;
