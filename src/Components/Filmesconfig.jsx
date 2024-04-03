import React from 'react'
import DescricaoFilme from './DescricaoFilme'
import GeneroFilme from './GeneroFilme'

export default function Filmesconfig() {
  return (
    <>
        <div class="row tm-mb-90">
             <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                 <div class="tm-bg-gray tm-video-details">
                     <DescricaoFilme/>
                     <GeneroFilme/>
                 </div>
             </div>
             <img src="img\Filme-01.jpg" alt="Image" class="img-fluid" id="fotoAmostra"></img>
        </div>
    </>
  )
}
