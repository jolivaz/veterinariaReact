import React, { Component } from 'react'
import uuid from 'uuid';

const stateInicial = {
    cita:{
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '', 
        sintomas: ''
    },
    error: false
}

class NuevaCita extends Component{
    state={... stateInicial}
    handleChange = e => {
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const {mascota,propietario,fecha,hora,sintomas} = this.state.cita;
        if (mascota === '' || 
            propietario === '' || 
            fecha === '' || 
            mascota === '' || 
            sintomas === ''){
                this.setState({
                    error: true
                });
            return;
        }
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();


        this.props.crearNuevaCita(nuevaCita);

        this.setState({
            ...stateInicial
        })
    }
    render(){
        const {error} = this.state;
        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    {
                        error &&
                        <div className="alert alert-danger mt-2 mb-5 text-center">
                            Todos los campos son obligatorios
                        </div>
                    }
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">
                                Nombre de Mascota
                            </label>
                            <div className="col-sm-8 col-md-9">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">
                                Nombre del propietario
                            </label>
                            <div className="col-sm-8 col-md-9">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de propietario"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">
                                Fecha de alta
                            </label>
                            <div className="col-sm-8 col-md-3">
                                <input 
                                    type="date"
                                    className="form-control"
                                    placeholder="Fecha de alta"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-3 col-form-label">
                                Hora de alta
                            </label>
                            <div className="col-sm-8 col-md-3">
                                <input 
                                    type="time"
                                    className="form-control"    
                                    placeholder="Hora de alta"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">
                                Síntomas
                            </label>
                            <div className="col-sm-8 col-md-9">
                                <textarea 
                                    className="form-control"
                                    placeholder="Descripcion de síntomas"
                                    name="sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                >
                                </textarea>
                            </div>
                        </div>
                        <input 
                            type="submit" 
                            value="Agregar cita"
                            className="py-3 mt-2 btn  btn-success btn-block "
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default NuevaCita;