import React, { Component } from "react";
import ValidateTP from "./ValidateTP";

class FormTP extends Component {
  state = {
    form: {
      vehicleType: "",
      vehiclePatent: "",
      vehicleModel: "",
      vehicleCapacity: "",
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
    const result = ValidateTP.validateTP(sinErrors);

    this.setState({ errors: result });
    // if (Object.keys(result).length === 0) {
    //   // Enviar el formulario
    // }
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="containerPrincipal">
          <div className="containerSecundario">
            <div className="form-group">
              <label>Tipo de Vehículo: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="vehicleType"
                onChange={this.handleChange}
              />
              {errors.vehicleType && <p>{errors.vehicleType}</p>}
              <br />
              <label>Patente del Vehículo: </label>
              <br />
              <input
                type="patentVehicle"
                className="form-control"
                name="patentVehicle"
                onChange={this.handleChange}
              />
              {errors.vehiclePatent && <p>{errors.vehiclePatent}</p>}
              <br />
              <label>Modelo del Vehículo: </label>
              <br />
              <input
                type="vehicleModel"
                className="form-control"
                name="vehicleModel"
                onChange={this.handleChange}
              />
              {errors.vehicleModel && <p>{errors.vehicleModel}</p>}
              <br />
              <label>Capacidad del Vehículo: </label>
              <br />
              <input
                type="vehicleCapacity"
                className="form-control"
                name="vehicleCapacity"
                onChange={this.handleChange}
              />
              {errors.vehicleCapacity && <p>{errors.vehicleCapacity}</p>}
              <br />
              <button className="btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default FormTP;
