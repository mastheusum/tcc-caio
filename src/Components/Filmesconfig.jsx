import React, { useEffect, useState } from 'react'
import DescricaoFilme from './DescricaoFilme'
import GeneroFilme from './GeneroFilme'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import FilmeModelo from '../Data/FilmeModelo'

export default function Filmesconfig() {
  const { filmeId } = useParams()

  const [filme, setFilme] = useState(FilmeModelo)

  useEffect( ()=>{
    axios.get("http://10.0.0.161/api/v1/movies/"+filmeId)
    .then( (resposta)=>{
      setFilme(resposta.data)
    })
    .catch( (error)=> {
      console.log(error)
    })
  }, [] )

  return (
    <>
        <div class="row tm-mb-90">
             <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                 <div class="tm-bg-gray tm-video-details">
                     <DescricaoFilme/>
                     <GeneroFilme/>
                 </div>
             </div>
             <iframe width="560" height="315" 
            src={filme.video_url} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

            </iframe>
        </div>
    </>
  )
}
