const validateIP = (values) => {
  const errors = {};
  if (!values.producto) {
    errors.producto = "Debe ingresar un producto";
  } else if (values.producto.trim().length < 2) {
    errors.producto = "El nombre del producto debe ser mínimo de 3 caracteres";
  } else if (values.producto.trim().length > 51) {
    errors.producto = "El nombre del producto debe ser máximo de 50 caracteres";
  }
  if (!values.observacion) {
    errors.observacion = "Debe ingresar una descripción de producto";
  } else if (values.observacion.trim().length > 101) {
    errors.observacion = "La descripción debe tener máximo 100 caracteres";
  }
  if (!values.cantidadProducto) {
    errors.cantidadProducto = "Debe ingresar la cantidad de productos";
  } else if (values.cantidadProducto.trim().length > 11) {
    errors.cantidadProducto = "La cantidad de producto debe ser máximo de 10 caracteres";
  }  else if (values.cantidadProducto.isNaN) {
    errors.cantidadProducto = "Debe ingresar sólo números";
  }
  if (!values.valorProducto) {
    errors.valorProducto = "Debe ingresar el valor de los productos";
  } else if (values.valorProducto >= 0) {
    errors.cantidadProducto = "Debe ingresar un número positivo";
  } else if (values.valorProducto.trim().length < 11) {
    errors.valorProducto =
      "La cantidad de producto debe ser máximo de 10 caracteres";
  } else if (values.valorProducto.isNaN) {
    errors.valorProducto = "Debe ingresar sólo números";
  };
    
  console.log(values);
  return errors;
};

export default { validateIP };
