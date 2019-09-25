import React, {Fragment} from 'react'
import Cita from '../cita/cita';

const ListaCitas = ({citas,eliminarCita}) => (
    <div className="card mt-2 py-5">
        <div className="card-body">
            {
                citas.length > 0 ?
                <h2 className="card-title text-center">
                    Administrador de citas
                </h2>
                :
                <h2 className="card-title text-center">
                    No hay citas
                </h2>
            }
            <div className="lista-citas">
                {
                    citas.map(cita => (
                        <Cita 
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    ))
                }
            </div>
        </div>
    </div>
); 

export default ListaCitas;