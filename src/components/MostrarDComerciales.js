import React, { Component } from "react";
import "../styles/Login.css";
import { getObject } from '../utils/storage'
import ValidateIP from './ValidateIP';

class MostrarDComerciales extends Component {
    state = {
        form: {
        companyName: "",
        fantasyName: "",
        comercialBusiness: "",
        email: "",
        comercialDNI: "",
        address: "",
        city: "",
        country: "",
        phoneNumber: "",
        },
        errors: {},
        clientId: getObject("clientId"),
        dataComercial: null,
        loading: true
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
        // if (Object.keys(result).length === 0) {
        // Actualizar datos!
        // this.mostrarDComerciales();
        // }
    };

    async componentDidMount()  {
        const url = `http://maipogrande-fv.duckdns.org:8080/api/ComercialData?clientID=${this.state.clientId}`;
        const response = await fetch(url);
        const data = await response.json(); 
        this.setState({dataComercial : data, loading: false});
    };

    render() {
        const { errors } = this.state;
        if(this.state.loading || !this.state.dataComercial){
            return <div>Loading...</div>
        }
        return (
        // <form onSubmit={this.handleSubmit}>
            <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="form-group">   
        <label>Nombre de compañía:</label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    name="companyName"
                    onChange={this.handleChange}
                    placeholder={this.state.dataComercial.CompanyName}
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
                    placeholder={this.state.dataComercial.FantasyName}
                />
                {errors.observacion && <p>{errors.observacion}</p>}
                <br />
                <label>Comercial Business: </label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    name="comercialBusiness"
                    onChange={this.handleChange}
                    placeholder={this.state.dataComercial.ComercialBusiness}
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
                    placeholder={this.state.dataComercial.Email}
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
                    placeholder={this.state.dataComercial.ComercialDNI}
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
                    placeholder={this.state.dataComercial.Address}
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
                    placeholder={this.state.dataComercial.City}
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
                    placeholder={this.state.dataComercial.Country}
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
                    placeholder={this.state.dataComercial.PhoneNumber}
                />
                {errors.producto && <p>{errors.producto}</p>}
                <br />
                <button
                    className="btn btn-primary"
                >
                    Ingresar productos
                </button>
                </div>        
            </div>
            </div>
        // </form>
        );
    
}
    


} //fin

export default MostrarDComerciales;
