import React, {Fragment} from 'react'

const Cita = ({cita,eliminarCita}) => (
        <div className="media mt-2">
            <div className="media-body">
                <h3 className="mt-0">{cita.mascota}</h3>
                <p className="card-text"><span>Nombre del dueño:</span>{cita.propietario}</p>
                <p className="card-text"><span>Fecha de ingreso:</span>{cita.fecha}</p>
                <p className="card-text"><span>Hora:</span>{cita.hora}</p>
                <p className="card-text"><span>Sintomas:</span>{cita.sintomas}</p>
                <button 
                    className="btn-danger"
                    onClick={() =>eliminarCita(cita.id)}
                    >Borrar</button>
            </div>
        </div>
    )   


export default Cita;