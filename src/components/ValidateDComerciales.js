const validateDComerciales = (values) => {
  const errors = {};
  if (!values.companyName) {
    errors.companyName = "Debe ingresar el nombre de compañía";
  } else if (values.companyName.trim().length < 6) {
    errors.companyName =
      "El nombre de la compañía debe ser mínimo de 7 caracteres";
  } else if (values.companyName.trim().length > 51) {
    errors.companyName =
      "El nombre de la compañía debe ser máximo de 50 caracteres";
  }
  if (!values.fantasyName) {
    errors.fantasyName = "Debe ingresar un nombre";
  } else if (values.fantasyName.trim().length < 6) {
    errors.fantasyName = "El nombre debe ser mínimo de 7 caracteres";
  } else if (values.fantasyName.trim().length > 51) {
    errors.fantasyName = "El nombre debe ser máximo de 50 caracteres";
  }
  if (!values.email) {
    errors.email = "Email requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email ingresado no es válido";
  }
  if (!values.comercialDNI.trim()) {
    errors.comercialDNI = "DNI de empresa requerido";
  } else if (values.comercialDNI.trim().length > 20) {
    errors.comercialDNI = "Su DNI de empresa debe tener máximo 20 caracteres";
  }
  if (!values.address) {
    errors.address = "Debe ingresar una dirección";
  } else if (values.address.trim().length < 14) {
    errors.address = "La dirección debe ser mínimo de 15 caracteres";
  } else if (values.address.trim().length > 101) {
    errors.address = "La dirección debe ser máximo de 100 caracteres";
  }
  if (!values.city) {
    errors.city = "Debe ingresar una ciudad";
  } else if (values.city.trim().length < 3) {
    errors.city = "La ciudad debe ser mínimo de 4 caracteres";
  } else if (values.city.trim().length > 51) {
    errors.city = "La ciudad debe ser máximo de 50 caracteres";
  }
  if (!values.country) {
    errors.country = "Debe ingresar un país";
  } else if (values.country.trim().length < 3) {
    errors.country = "El país debe ser mínimo de 4 caracteres";
  } else if (values.country.trim().length > 31) {
    errors.country = "El país debe ser máximo de 30 caracteres";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Debe ingresar un número telefónico";
  } else if (values.phoneNumber >= 0) {
    errors.cantidadProducto = "Debe ingresar un número positivo";
  } else if (values.phoneNumber.trim().length < 16) {
    errors.phoneNumber =
      "La cantidad de producto debe ser máximo de 15 caracteres";
  } else if (values.phoneNumber.isNaN) {
    errors.phoneNumber = "Debe ingresar sólo números";
  }
  console.log(values);
  return errors;
};;

export default { validateDComerciales };
