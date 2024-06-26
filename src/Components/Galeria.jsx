import React from 'react'
import Filmes from './Filmes'

export default function Galeria(props) {

  return (
    <>
    <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">Filmes</h2>
        </div>
        <div className="row tm-mb-90 tm-gallery">
            {
                props.movies.map( (movie) => {
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
