import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from '../Pages/Index';
import Filme from '../Pages/Filme';
import CadastroFilme from '../Pages/CadastroFilme';

const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={ <Index/> }/>
                    <Route path='/Filme/:filmeId' element={<Filme/>}/>
                    <Route path='/cadastro-filme' element={<CadastroFilme/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;
