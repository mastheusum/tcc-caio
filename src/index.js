import React from 'react';
import { createRoot } from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.css'
import './vendor/Css/templatemo-style.css'

import Rotas from './Rotas/Rotas';

const contauner = document.getElementById('root')
const root = createRoot(contauner)
root.render(
  <Rotas/>
)
