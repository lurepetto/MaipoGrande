import React, { Component } from "react"
import sha1 from "sha1"
import "../styles/Login.css"
import { setObject } from '../utils/storage'

class Log extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
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
<<<<<<< HEAD
          console.log(data.ProfileName)
          if (data.ProfileName === "Productor") {
            window.location.href = "/Productor";
=======
          const rol = data.ProfileName; /*Creación de una variable con el rol del usuario */
          console.log(rol)
          setObject('profileName', rol )
          /* Ciclo para rutear a página según rol */
          if (rol === "Productor") {
            return window.open("/productor", "_self");
>>>>>>> bc6dd9279b5fa7255262c270f7c8c162b58f01b6
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
    return (
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
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.iniciarSesion()}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Log
