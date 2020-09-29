const validateTP = (values) => {
  const errors = {};
  if (!values.vehicleType) {
    errors.vehicleType = "Este campo es obligatorio";
  } else if (values.vehicleType.length < 6) {
    errors.vehicleType = "Su tipo de vehículo debe tener más de 5 caracteres";
  }
  if (!values.vehiclePatent) {
    errors.vehiclePatent = "Este campo es obligatorio";
  } else if (values.vehiclePatent.length < 6) {
    errors.vehiclePatent = "Su patente debe tener más de 5 caracteres";
  }
  if (!values.vehicleModel) {
    errors.vehicleModel = "Este campo es obligatorio";
  } else if (values.vehicleModel.length < 3) {
    errors.vehicleModel =
      "Su modelo de vehiculo debe tener más de 2 caracteres";
  }
  if (!values.vehicleCapacity) {
    errors.vehicleCapacity = "Este campo es obligatorio";
  } else if (values.vehicleCapacity.length < 2) {
    errors.vehicleCapacity = "Su contraseña debe tener más de 3 caracteres";
  }
  console.log(values);
  return errors;
};

export default { validateTP };
