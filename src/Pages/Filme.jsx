import React from 'react'
import Titulo from '../Components/Titulo'
import { useParams } from 'react-router-dom'
import Procurar from '../Components/Procurar'
import FilmesGerais from '../Components/FilmesGerais'
export default function Filme() {
    const { Filme } = useParams
  return (
    <>
        <Titulo/>
        <Procurar/>
        <FilmesGerais/>
    </>
  )
}
