import React, { useEffect, useState } from 'react'
import Filmes from './Filmes'
import axios from 'axios'

export default function Galeria() {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get("http://10.0.0.163/api/v1/movies")
        .then( (response)=> {
            console.log(response.data)
            setMovies(response.data)
        })
        .catch( (error)=> {
            console.log(error);
        })
    }, [])

  return (
    <>
    <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">Filmes</h2>
        </div>
        <div className="row tm-mb-90 tm-gallery">
            {
                movies.map( (movie) => {
                    return(
                        <Filmes key={movie.id} id={movie.id} title={movie.title} image={movie.image} date={movie.date} views={movie.views}/>
                    )
                })
            }
        	
        </div>
    </div>
    </>
  )
}
