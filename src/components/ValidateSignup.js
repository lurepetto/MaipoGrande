export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Nombre requerido";
  } else if (
    values.username.trim().length < 3 ||
    values.username.trim().length > 50
  ) {
    errors.username = "Su nombre debe tener entre 3 y 50 caracteres";
  }

  if (!values.lastname.trim()) {
    errors.lastname = "Apellido requerido";
  } else if (
    values.lastname.trim().length < 3 ||
    values.lastname.trim().length > 50
  ) {
    errors.lastname = "Su apellido debe tener entre 3 y 50 caracteres";
  }

  if (!values.dni.trim()) {
    errors.dni = "DNI requerido";
  } else if (values.dni.trim().length > 20) {
    errors.dni = "Su DNI debe tener máximo 20 caracteres";
  }

  if (!values.rol.trim()) {
    errors.rol = "Rol requerido";
  } else if (values.rol.trim().length < 9 || values.rol.trim().length > 50) {
    errors.rol = "Su rol debe tener entre 9 y 50 caracteres";
  }

  if (!values.email) {
    errors.email = "Email requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email ingresado no es válido";
  }

  return errors;
}
