import React, { useState } from 'react';
import FilmeModelo from '../Data/FilmeModelo';
import axios from 'axios';


export default function GerenciaGeral(props){
    const [filme, setFilme] = useState(FilmeModelo)
    function excluir(evento){
        axios.delete("http://26.69.31.80:80/api/v1/movies", {"api_v1_movie":filme})
    }
    return (
            <form>
                <label className='formulario'>{props.id}</label>
                <label className='formulario'>{props.title}</label>
                <label className='formulario'>{props.date}</label>
                <label className='formulario'>{props.views}</label>
                <input type="submit" value="Deletar" className='excluir' onSubmit={excluir}/>
            </form>
    );
}