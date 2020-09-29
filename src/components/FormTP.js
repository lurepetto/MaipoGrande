import React, { Component } from "react";
import ValidateTP from "./ValidateTP";
import { getObject } from "../utils/storage";

class FormTP extends Component {
  state = {
    form: {
      vehicleType: "",
      vehiclePatent: "",
      vehicleModel: "",
      vehicleCapacity: "",
    },
    errors: {},
    clientId: getObject("clientId")
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
    // Enviar el formulario
    this.enviarTransporte()
  };

  enviarTransporte = () => {
    fetch(`http://maipogrande-fv.duckdns.org:8080/api/Vehicle?clientID=${this.state.clientId}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json; charset=UTF-8",
      },
      mode: "cors",
      body: JSON.stringify({
        VehicleID: "",
        ClientID: this.state.clientId,
        VehicleType: this.state.form.vehicleType,
        VehiclePatent: this.state.form.vehiclePatent,
        VehicleModel: this.state.form.vehicleModel,
        VehicleCapacity: this.state.form.vehicleCapacity,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // const rol =
        //   data.ProfileName; /*Creación de una variable con el rol del usuario */
        // const clientid = 
        //   data.ClientID;
        // setObject("profileName", rol); // Insertamos el rol en el objeto 'profilename'
        // setObject("clientId", clientid) 
        /* Ciclo para rutear a página según rol */
      })
      .catch((error) => alert("Error detected: " + error));
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
                type="vehiclePatent"
                className="form-control"
                name="vehiclePatent"
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
