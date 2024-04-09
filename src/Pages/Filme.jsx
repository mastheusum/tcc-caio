import React, { useEffect, useState } from 'react'
import Titulo from '../Components/Titulo'
import Procurar from '../Components/Procurar'
import FilmesGerais from '../Components/FilmesGerais'

export default function Filme() {
  return (
    <>
        <Titulo/>
        <Procurar/>
        <FilmesGerais/>
    </>
  )
}
