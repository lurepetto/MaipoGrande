import React, { useEffect, useState } from "react";
import "../../App.css";
import { Formik, useField } from 'formik'
import * as Yup from 'yup'
import {getObject } from '../../utils/storage'

/*const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className='text-input' {...field}{...props} />
    {meta.touched && meta.error ? (
      <div className='error'>{meta.error}</div>
    )}: null}
    </>
  )
}*/

function Productor(props) {
  const [perfil, setPerfil]=useState(null)
  useEffect(() => {
    const profileName = getObject("profileName");
    setPerfil(profileName)
    if (profileName !== "Productor") {
      window.open("/", "_self");
    }
  }, []);

  return (
    <>
      <p>{perfil}</p>
      <Formik
        initialValues={{
          producto: "",
          observacion: "",
          cantidadProducto: 0,
          valorProducto: 0,
        }}
        validationSchema={Yup.object({
          producto: Yup.string()
            .min(3, "Debe ingresar al menos 3 caracteres")
            .max(20, "Debe ingresar máximo 20 caracteres")
            .required("Producto requerido"),
          observacion: Yup.string()
            .min(5, "Debe ingresar al menos 5 caracteres")
            .max(100, "Debe ingresar máximo 100 caracteres")
            .required("Producto requerido"),
          cantidadProducto: Yup.number()
            .typeError("La cantidad debe ser numerica")
            .positive("La cantidad debe ser mayor a 0")
            .required("Cantidad requerida"),
          valorProducto: Yup.number()
            .typeError("El valor debe ser numerico")
            .positive("El valor debe ser mayor a 0")
            .required("El valor es requerido"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resetForm()
            setSubmitting(false)
          }, 3000)
        }}
      ></Formik>
    </>
  );
}

export default Productor
