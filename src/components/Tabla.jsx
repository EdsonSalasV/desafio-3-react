import React, { useState } from 'react'
import TableRow from './TableRow'


const Tabla = ({usuarios}) => {
    const [palabra, setPalabra] = useState("");
    let results =[];

    if(!palabra) {
        results= usuarios;
    }else {
        results =usuarios.filter(
            (user)=>
            user.name.toLowerCase().includes(palabra.toLowerCase()) ||
            user.email.toLowerCase().includes(palabra.toLowerCase())
        );
    }

  return (
    <div >
        <div className='search'> 
            <h2>Busqueda de colaboradores</h2>
            <input type="text" 
            className='form-control' 
            placeholder='Buscar' 
            value={palabra} 
            onChange={(e)=> setPalabra(e.target.value)}
            />
        </div>

        <h1>Lista de Colaboradores</h1>

            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {results.length > 0 ? (
                        results.map((user) => <TableRow key={user.id} user={user} />)
                    ) : (
                        <tr>
                            <td>No hay resultados</td>
                        </tr>
                    )}
                </tbody>
            </table>       
    </div>
  );
};

export default Tabla
