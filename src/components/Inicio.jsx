import React, {useEffect, useState} from 'react'
import { todosPersonajes } from '../functions/funciones'

const Inicio = () => {

    const [personajes, setPersonajes] = useState(null)

    useEffect(() =>{
        todosPersonajes(setPersonajes)
    }, [])

    return (

        <div className='container'>
            <div className='table-responsive'>
                <h4 className='fw-bold pt-3'>Consulta Rick and Morty API</h4>
                <hr />

                <table className='table table-striped table-bordered'>
                    <thead className='table-secondary'>
                        <tr>
                            <th>COD</th>
                            <th>NOMBRE</th>
                            <th>ESPECIE</th>
                            <th>ESTADO</th>
                            <th>GENERO</th>
                            <th>ORIGEN</th>
                            <th>IMAGEN</th>
                        </tr>
                    </thead>
                    {personajes != null ? (
                    <tbody className='table-group-divider'>
                        {personajes.map( (person, i) => (
                            <tr key={person.id}>
                                <td>{(i+1)}</td>
                                <td>{person.name}</td>
                                <td>{person.species}</td>
                                <td>{person.status}</td>
                                <td>{person.gender}</td>
                                <td>{person.origin.name}</td>
                                <img className='style_image' src={person.image} alt=""  />
                            </tr>
                        ))}
                    </tbody>
                    ): ('No hay personajes')}
                </table>
            </div>

            <h5 className='fw-bold pt-3'>OBTENER DATOS SEGÚN EL PERSONAJE</h5>
            <hr />

            <div className='d-flex flex-wrap justify-content-evenly mb-5'>
                {personajes != null ? (
                    personajes.map(personaje => (
                        <div key={personajes.id}>
                        <a className='btn btn-outline-dark text-decoration-none m-1' href={`/personaje/${personaje.id}`}>{personaje.name}</a>
                        {/* <img src={personaje.image} alt="" /> */}
                    </div>
                    ))
                    ): ('No hay personajes')}
            </div>
        </div>
    )
}

export default Inicio
