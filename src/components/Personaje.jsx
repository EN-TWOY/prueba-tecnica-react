import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { unicoPersonaje } from '../functions/funciones'

const Personaje = () => {

    const [personaje, setPersonaje] = useState(null)

    const params = useParams()

    useEffect(()=>{
        unicoPersonaje(params.id, setPersonaje)
    },[])

    return (
        <div className='d-flex align-items-center justify-content-center style_center'>
        {personaje != null ? (
            <div className='card text-center p-3'>
                <span className='card-header fw-bold fs-5'>Detalle Personaje</span>
                <p>ID: {params.id}</p>
                <p>Personaje: {personaje.name}</p>
                <p>Estado: {personaje.status}</p>
                <p>Género: {personaje.gender}</p>
                <p>Origen: {personaje.origin.name}</p>
                <img className='rounded' src={personaje.image} alt="" />
                <a href="http://localhost:3000/" className='btn btn-outline-dark mt-2'>Ir A Inicio</a>
            </div>
        ) : ('No hay personaje')}
        </div>
    )
}

export default Personaje
