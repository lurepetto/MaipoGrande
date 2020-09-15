import React from "react";
import "../Login.css";
import InputField from "../InputField";

function Login() {
  const inputRefs = React.useRef([
    React.createRef(),React.createRef()
  ]);
  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData(prev => ({...prev, [name]: value }))
  }

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++){
      const valid = inputRefs.current[i].current.validate()
      console.log(valid)
      if (!valid) {
        isValid = false
      }
    }

    if (!isValid) {
      return
    }

    console.log('Logged In');
    //Sigue normalmente
  }

  return (
    <div className='Login'>
        <form onSubmit={submitForm} className='form'>
          <h1>Ingreso de Usuarios</h1>
          <InputField
            ref={inputRefs.current[0]}
            name="usuario"
            label="Usuario*:"
            onChange={handleChange}
            validation={'required|min:6|max:12'}
          />
          <InputField
            ref={inputRefs.current[1]}
            type="password"
            name="contraseña"
            label="Contraseña*:"
            onChange={handleChange}
            validation={'required|min:6'}
          />
          <button type='submit'>Login</button>
        </form>
    </div>
  );
}

export default Login;
