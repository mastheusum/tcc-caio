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
        filme['date'] = new Date(filme['date'])
        
        axios.post("http://26.69.31.80:80/api/v1/movies", {"api_v1_movie":filme})
        console.log(FilmeModelo)
        setFilme(FilmeModelo)
        
    }   

  return (
    <>
        <form onSubmit={ cadastrarFilme }> 
            <label htmlFor="title" className='formulario'>Título</label>
            <input onChange={Mudar} type="text" name="title" id="title" className='digite_aqui'/>
            <br />            

            <label htmlFor="description" className='formulario'>Descrição</label>
            <input onChange={Mudar} type="text" name="description" id="description" className='digite_aqui' />
            <br />

            <label htmlFor="date" className='formulario'>Data</label>
            <input onChange={Mudar} type="date" name="date" id="date" className='digite_aqui'/>
            <br />

            <label htmlFor="views" className='formulario'>Visualizações</label>
            <input onChange={Mudar} type="number" name="views" id="views"  className='digite_aqui'/>
            <br />

            <label htmlFor="image" className='formulario'>URL da Image</label>
            <input onChange={Mudar} type="text" name="image" id="image"  className='digite_aqui'/>
            <br />

            <label htmlFor="video_url" className='formulario'>Vídeo</label>
            <input onChange={Mudar} type="text" name="video_url" id="video_url"  className='digite_aqui'/>
            <br />

            <input type="submit" value="Cadastrar" className='digite_aqui'/>
        </form>
    </>
  )
}
