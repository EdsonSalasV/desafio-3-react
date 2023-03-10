import React, { useState } from 'react'
import {getId} from '../helpers/getId'
import '../App.css'

const Formulario = ({usuarios, setUsuarios}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState ('')

    const handleSubmit = (e)=>{
        e.preventDefault()

if([name, email].includes('')){
    alert('Todos los datos son OBLIGATORIOS')
}

const objetoUsuario ={
    name,
    email,
    id: getId()
}
setUsuarios([...usuarios, objetoUsuario])

setName('') 
setEmail('')

    };
 
  return (
    <div>
      <h2 className="search" >Agregar Colaboradores</h2>

        <form className='container' onSubmit={handleSubmit}>
            <div className='mb-3 w-50'>
                <label htmlFor="Nombre"> Nombre </label>
                <input className="form-control" id="name" type="text"  value={name} onChange={e=>setName(e.target.value)} />            
            </div>

            <div className='mb-3 w-50'>
                <label htmlFor="email"> Email </label>
                <input className='form-control' id="email" type="email" value={email} onChange={e=> setEmail(e.target.value)} />            
            </div>
            <button className='btn btn-primary'>Agregar</button>
        </form>
    </div>
  )
}

export default Formulario
