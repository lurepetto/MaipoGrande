import React from "react";
import UseForm from "./UseForm";
import validateInfo from "./ValidateSignup";
import "../styles/Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = UseForm(
    submitForm,
    validateInfo
  );

  return (
    <div className="form-content-right">
      <form className="form-signup" onSubmit={handleSubmit}>
        <h1>
          ¡Forma parte de nuestra comunidad hoy mismo! Crea tu cuenta llenando
          los campos a continuación.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Nombre
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Nombre"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="lastname" className="form-label">
            Apellido
          </label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Apellido"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="dni" className="form-label">
            DNI / Rut
          </label>
          <input
            id="dni"
            type="text"
            name="dni"
            className="form-input"
            placeholder="DNI / Rut"
            value={values.dni}
            onChange={handleChange}
          />
          {errors.dni && <p>{errors.dni}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="rol" className="form-label">
            Rol
          </label>
          <input
            id="rol"
            type="text"
            name="rol"
            className="form-input"
            placeholder="Rol"
            value={values.rol}
            onChange={handleChange}
          />
          {errors.rol && <p>{errors.rol}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Enviar
        </button>
        <span className="form-input-login">
          ¿Ya tienes una cuenta? Ingresa <a href="/Login">aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
