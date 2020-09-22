export default function validateInfo(values) {
    let errors = {};

    if(!values.username.trim()) {
        errors.username = "Nombre requerido";
    }

    if(!values.email) {
        errors.email = "Email requerido";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    {    
        errors.email = "Email ingresado no es válido";
    }

    if(!values.description){
        errors.description = "Descripción requerida";
    }    
    
    return errors;
}