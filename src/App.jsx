import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Tabla from './components/Tabla'
import {BaseColaboradores} from './db'

function App() {
  const [usuarios, setUsuarios] = useState(BaseColaboradores)

  return (
    <div className='container'>
      <h1 className='text-center'>Base de datos</h1>
      <Formulario usuarios={usuarios} setUsuarios={setUsuarios}/>
      
      <Tabla usuarios = {usuarios} />
      
    </div>
  )
}

export default App
