import React, { useState } from 'react';
import FilmeModelo from '../Data/FilmeModelo';
import axios from 'axios';


export default function GerenciaGeral(props){
    const [filme, setFilme] = useState(FilmeModelo)
    function excluir(evento){
        axios.delete("http://10.0.0.161/api/v1/movies/"+props.id)
    }
    return (
            <form onSubmit={excluir} className='dis'>
                <label className='formulario'>{props.id}</label>
                <label className='formulario' style={{width:"30%"}}>{props.title.substr(0, 50)}</label>
                <label className='formulario'>{props.date}</label>
                <label className='formulario'>{props.views}</label>
                <input type="submit" value="Deletar" className='excluir'/>
            </form>
    );
}