import React from 'react'
import useForm from './useForm'
import validateInfo from './validateInfoFormSignup'
import "../styles/Form.css"


const FormSignup = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);

    return (
        <div className = 'form-content-right'>
            <form className = 'form-signup' onSubmit = {handleSubmit}>
                <h1>¡Forma parte de nuestra comunidad hoy mismo!
                    Crea tu cuenta llenando los campos a continuación.
                </h1>
                <div className = 'form-inputs'>
                    <label htmlFor = 'username' 
                    className = 'form-label'>
                        Nombre
                    </label>
                    <input 
                        id = 'username'
                        type = 'text' 
                        name = 'username' 
                        className = 'form-input'
                        placeholder = 'Nombre'
                        value = {values.username}
                        onChange = {handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div> 
                <div className = 'form-inputs'>
                    <label htmlFor = 'email' 
                    className = 'form-label'>
                        Email
                    </label>
                    <input
                        id = 'email' 
                        type = 'email' 
                        name = 'email' 
                        className = 'form-input'
                        placeholder = 'Email'
                        value = {values.email}
                        onChange = {handleChange}
                        />
                    {errors.email && <p>{errors.email}</p>}    
                </div> 
                <div className = 'form-inputs'>
                    <label htmlFor = 'description' 
                    className = 'form-label'>
                        Descripción (No olvides indicarnos tu rol)
                    </label>
                    <textarea
                        id = 'description' 
                        type = 'description' 
                        name = 'description' 
                        className = 'form-input'
                        placeholder = 'Descripción'
                        value = {values.description}
                        onChange = {handleChange}
                        />
                    {errors.description && <p>{errors.description}</p>}      
                </div>
                <button className = 'form-input-btn'
                    type = 'submit'>
                        Enviar
                </button>
                <span className = 'form-input-login'>
                    ¿Ya tienes una cuenta? Ingresa <a
                    href = '/Login'>aquí</a>    
                </span>  
            </form>
        </div>
    )
}

export default FormSignup;

