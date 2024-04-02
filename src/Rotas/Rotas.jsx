import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Titulo from '../Components/Titulo';
import Procurar from '../Components/Procurar';
import Filmes from '../Components/Filmes';


const Rotas = () => {
    return (
        <>
            <Titulo/>      
            <Procurar/>
            <Filmes/>
        </>
    );
}

export default Rotas;
