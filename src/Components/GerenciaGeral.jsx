import React from 'react';
import GerenciaDeletar from './GerenciaDeletar';
export default function GerenciaGeral(props){
    return (
        <>
            <div className='separa'>
                {
                    props.movies.map( (movie) => {
                            return(
                                <GerenciaDeletar key={movie.id} id={movie.id} title={movie.title} image={movie.image} date={movie.date} views={movie.views}/>
                            )
                    } )
                }        
            </div>
        </>
    );
}
