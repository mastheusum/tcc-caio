import React from 'react'
import TituloFilme from './TituloFilme'
import Filmesconfig from './Filmesconfig'

export default function FilmesGerais() {
  return (
    <>
        <div class="container-fluid tm-container-content tm-mt-60">
            <TituloFilme/>      
            <Filmesconfig/>
        </div>
    </>
  )
}
