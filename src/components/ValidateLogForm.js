const validate = values => {
    const errors = {}
      if(!values.username) {
        errors.username = 'Este campo es obligatorio'
      }else if (values.username.length < 6){
        errors.username = 'Su nombre de usuario debe tener más de 5 caracteres'
      }
      if(!values.password) {
        errors.password = 'Este campo es obligatorio'
      }else if(values.password.length < 8){
        errors.password = 'Su contraseña debe tener más de 7 caracteres'
      }
    console.log(values)
    return errors
}

export default { validate };