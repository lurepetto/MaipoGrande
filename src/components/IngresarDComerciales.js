import React, { Component } from "react";
import "../styles/Login.css";
import ValidateDComerciales from './ValidateDComerciales';

class ingresarDComerciales extends Component {
  state = {
    form: {
      companyName: "",
      fantasyName: "",
      email: "",
      comercialDNI: "",
      address: "",
      city: "",
      country: "",
      phoneNumber: "",
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
    const result = ValidateDComerciales.validate(sinErrors);

    this.setState({ errors: result });
    if (Object.keys(result).length === 0) {
      // Enviar el formulario!
      this.ingresarDComerciales();
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="containerPrincipal">
          <div className="containerSecundario">
            <div className="form-group">
              <label>Nombre de compañía: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="companyName"
                onChange={this.handleChange}
              />
              {errors.producto && <p>{errors.producto}</p>}
              <br />
              <label>Nombre de Fantasía: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="fantasyName"
                onChange={this.handleChange}
              />
              {errors.observacion && <p>{errors.observacion}</p>}
              <br />
              <label>Comercial Business: </label>
              <br />
              <input
                type="number"
                className="form-control"
                name="comercialBusiness"
                onChange={this.handleChange}
              />
              {errors.cantidadProducto && <p>{errors.cantidadProducto}</p>}
              <br />
              <label>Email: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={this.handleChange}
              />
              {errors.producto && <p>{errors.producto}</p>}
              <br />
              <label>DNI Comercial: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="comercialDNI"
                onChange={this.handleChange}
              />
              {errors.producto && <p>{errors.producto}</p>}
              <br />
              <label>Dirección: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={this.handleChange}
              />
              {errors.producto && <p>{errors.producto}</p>}
              <br />
              <label>Ciudad: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="city"
                onChange={this.handleChange}
              />
              {errors.producto && <p>{errors.producto}</p>}
              <br />
              <label>País: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="country"
                onChange={this.handleChange}
              />
              {errors.producto && <p>{errors.producto}</p>}
              <br />
              <label>Número telefónico: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                onChange={this.handleChange}
              />
              {errors.producto && <p>{errors.producto}</p>}
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

export default ingresarDComerciales;
