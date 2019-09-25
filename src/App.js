import React, { Component } from 'react';
import Header from './components/header/header';
import NuevaCita from './components/nuevaCita/nuevaCita';
import './bootstrap.min.css';
import ListaCitas from './components/listaCitas/listaCitas';

class App extends Component{

  state={
    citas: []
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate(){
    console.log('update',JSON.stringify(this.state.citas));
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos];

    this.setState({
      citas
    })
  }

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];

    const Newcitas = citasActuales.filter(cita => cita.id !== id);

    this.setState({
      citas: Newcitas
    })
  }

  render(){
    return(
      <div className="container">
        <Header titulo='Administrador Pacientes Veterinaria' />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
          </div>
          <div className="col-mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
