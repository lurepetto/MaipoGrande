import React, { Component } from "react"
import sha1 from "sha1"
import "../styles/Login.css"
import { setObject } from '../utils/storage'
import ValidateLogForm from './ValidateLogForm'



class Log extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
    errors: {
    }
  };

  /* Método para capturar inputs */
  handleChange=async e=>{
    await this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    });
    console.log(this.state.form); /*Imprimimos los datos ingresados en el estado en la consola */
}


  handleSubmit = e => {
    e.preventDefault()
    const { errors, ...sinErrors } = this.state.form
    const result = ValidateLogForm.validate(sinErrors)
    
    this.setState({ errors: result })
    if(Object.keys(result).length === 0) {
      // Enviar el formulario!
      this.iniciarSesion()
    }
    
  }



  /* Método para hacer la petición http */
  iniciarSesion = () => {
  fetch("http://maipogrande-fv.duckdns.org:8080/api/login", {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain",
          "Content-Type": "application/json; charset=UTF-8",
        },
        mode: "cors",
        body: JSON.stringify({Username: this.state.form.username,
                              Password: sha1(this.state.form.password)}),
      })
        .then(response =>  response.json())
        .then(data => {
          const rol = data.ProfileName; /*Creación de una variable con el rol del usuario */
          console.log(rol)
          setObject('profileName', rol )
          /* Ciclo para rutear a página según rol */
          if (rol === "Productor") {
            return window.open("/productor", "_self");
          }
          else if (rol === "Cliente") {
            return window.open("/cliente", "_self");
          }
          else if (rol === "Transportista") {
            return window.open("/transportista", "_self");
          }
          
        })
        .catch((error) => alert("Error detected: " + error));
    }



  render() {
    const { errors } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="containerPrincipal">
          <div className="containerSecundario">
            <div className="form-group">
              <label>Usuario: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.handleChange}
              />
              {errors.username && <p>{ errors.username }</p>}
              <br />
              <label>Contraseña: </label>
              <br />
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.handleChange}
              />
              {errors.password && <p>{ errors.password }</p>}
              <br />
              <button
                className="btn btn-primary"
                // onClick={() => this.iniciarSesion()}
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
     </form> 
    );
  }
}

export default Log
