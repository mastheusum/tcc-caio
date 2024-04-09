import React from 'react';

export default function Filmes(props) {
    return(
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure className="effect-ming tm-video-item">
                <img src={props.image} alt={props.title} className="img-fluid"/>
                <figcaption className="d-flex align-items-center justify-content-center">
                    <h2>{props.title}</h2>
                    <a href={"/Filme/"+(parseInt(props.id).toString())}>Veja mais</a>
                </figcaption>                    
            </figure>
            <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">{props.date}</span>
                <span>{props.views} views</span>
            </div>
        </div>
    )
}