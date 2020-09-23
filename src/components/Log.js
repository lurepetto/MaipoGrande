import React, { Component } from "react";
import sha1 from "sha1";


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
    console.log(this.state.form);
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
        // .then(console.log(" "+this.state.form.username+ " "+sha1(this.state.form.password)))
        .then(response =>  response.json() )
        .then(data => {
          console.log(data.ProfileName)
          if(data.ProfileName === "Administrador"){
            window.location.href='/contact'
            // asdasdasd
          }
        })


        // .then(response => {
        //   console.log(response)
        // })
        // .then((data) => console.log(data))
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

export default Log;
