import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Titulo from '../Components/Titulo';
// import Procurar from '../Components/Procurar';
import Galeria from '../Components/Galeria';
import Footer from '../Components/Footer';

export default function Index() {

  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")

  function Buscar (evento) {
      evento.preventDefault()
      axios.get('http://10.0.0.161/api/v1/movies?q[title_cont]='+title)
      .then((response)=>{
        console.log('teste')
        setMovies(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  const Entrada = (evento) => {
      setTitle(evento.target.value)
  }

  useEffect(()=>{
    axios.get("http://10.0.0.161/api/v1/movies")
    // axios.get("http://localhost:3001/api/v1/movies")
    .then( (response)=> {
        setMovies(response.data)
    })
    .catch( (error)=> {
        console.log(error);
    })
  }, [])

  return (
    <>
      <Titulo/>
      <div style={{ backgroundImage: "url('../../templatemo_556_catalog_z/templatemo_556_catalog_z/img/hero.jpg')" }} className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" >
            <form className="d-flex tm-search-form" onSubmit={Buscar}>
                <input 
                className="form-control tm-search-input" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                onChange={Entrada}
                />
                <button className="btn btn-outline-success tm-search-btn" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
       </div>
      <Galeria movies={movies}/>
      <Footer/>
    </>
  )
}
