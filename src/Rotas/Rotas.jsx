import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from '../Pages/Index';
import Filme from '../Pages/Filme';

const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={ <Index/> }/>
                    <Route path='/Filme' element={<Filme/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;
