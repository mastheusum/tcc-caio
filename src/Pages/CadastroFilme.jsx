import React, { useState } from 'react'
import FilmeModelo from '../Data/FilmeModelo'
import axios from 'axios'

export default function CadastroFilme() {

    const [filme, setFilme] = useState(FilmeModelo)
    
    function Mudar(evento){
        const valor = evento.target.value
        const campo = evento.target.name
        setFilme({...filme,[campo]:valor})
    }

    function cadastrarFilme(evento){
        evento.preventDefault()
        delete filme['id']
        let now_utc = Date.UTC(
            filme['date'].getUTCFullYear(), filme['date'].getUTCMonth(),
            filme['date'].getUTCDate(), filme['date'].getUTCHours(),
            filme['date'].getUTCMinutes(), filme['date'].getUTCSeconds());
        filme['date'] = new Date(now_utc)
        
        axios.post("http://10.0.0.163/api/v1/movies", {"api_v1_movie":filme})
        setFilme(FilmeModelo)
    }   

  return (
    <>
        <form onSubmit={ cadastrarFilme }>
            <label htmlFor="title">Título</label>
            <input onchange={Mudar} type="text" name="title" id="title" />
            <br />            

            <label htmlFor="description">Descrição</label>
            <input onchange={Mudar} type="text" name="description" id="description" />
            <br />

            <label htmlFor="date">Data</label>
            <input onchange={Mudar} type="date" name="date" id="date" />
            <br />

            <label htmlFor="views">Visualizações</label>
            <input onchange={Mudar} type="number" name="views" id="views" />
            <br />

            <label htmlFor="image">URL da Image</label>
            <input onchange={Mudar} type="text" name="image" id="image" />
            <br />

            <label htmlFor="video_url">Vídeo</label>
            <input onchange={Mudar} type="text" name="video_url" id="video_url" />
            <br />

            <input type="submit" value="Cadastrar" />
        </form>
    </>
  )
}
