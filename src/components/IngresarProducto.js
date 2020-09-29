import React, { Component } from "react";
import "../styles/Login.css";
import ValidateIP from "./ValidateIP";
import Log from "./Log";


class ingresarProducto extends Component {
  state = {
    form: {
      producto: "",
      observacion: "",
      cantidadProducto: 0,
      valorProducto: 0,
    },
    errors: {},
  };

  /* Método para capturar inputs */
  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(
      this.state.form
    ); /*Imprimimos los datos ingresados en el estado en la consola */
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { errors, ...sinErrors } = this.state.form;
    const result = ValidateIP.validate(sinErrors);

    this.setState({ errors: result });
    if (Object.keys(result).length === 0) {
      // Enviar el formulario!
      this.ingresarProducto();
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="containerPrincipal">
          <div className="containerSecundario">
            <div className="form-group">
              <label>Producto: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="producto"
                onChange={this.handleChange}
              />
              {errors.producto && <p>{errors.producto}</p>}
              <br />
              <label>Observación: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="observacion"
                onChange={this.handleChange}
              />
              {errors.observacion && <p>{errors.observacion}</p>}
              <br />
              <label>Cantidad producto: </label>
              <br />
              <input
                type="number"
                className="form-control"
                name="cantidadProducto"
                onChange={this.handleChange}
              />
              {errors.cantidadProducto && <p>{errors.cantidadProducto}</p>}
              <br />
              <label>Valor Producto: { Log.rol }</label>
              <br />
              <input
                type="number"
                className="form-control"
                name="valorProducto"
                onChange={this.handleChange}
              />
              {errors.valorProducto && <p>{errors.valorProducto}</p>}
              <br />
              <button
                className="btn btn-primary"
                // onClick={() => this.iniciarSesion()}
              >
                Ingresar productos
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ingresarProducto;
