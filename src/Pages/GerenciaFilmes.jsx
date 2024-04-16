import React, { useEffect, useState } from 'react';
import GerenciaGeral from '../Components/GerenciaGeral';
import CadastroFilme from '../Components/CadastroFilme';
import axios from 'axios';
export default function GerenciaFilmes() {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axios.get("http://10.0.0.161/api/v1/movies")
        .then( (response)=> {
            setMovies(response.data)
        })
        .catch( (error)=> {
            console.log(error);
        })
      }, [])
    return (
        <>  
            <CadastroFilme/>
            <GerenciaGeral movies ={movies}/>
        </>
    );
}

