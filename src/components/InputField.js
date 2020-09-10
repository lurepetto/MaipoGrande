import React, {forwardRef, useImperativeHandle} from 'react';

const InputField = forwardRef((props, ref) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const HandleChange = (event) => {
    setValue(event.target.value);
    setError("");
    props.onChange(event.target.name, event.target.value);
  };

  const validate = () => {
      //retorna true si es valido
      // de lo contrario retorna falso

    if (props.validation) {
        const rules = props.validation.split('|');

        for (let i = 0; i < rules.length; i++) {
            const current = rules[i];

            if (current === 'required') {
                if (!value) {
                    setError("Este campo es requerido")
                    return false
                }
            }

            const pair = current.split(':')
            switch(pair[0]) {
                case 'min':
                    if (value.length < pair[1]) {
                        setError(`Este campo tiene que ser al menos de ${pair[1]} caracteres`);
                        return false
                    }
                break;
                case 'max':
                    if (value.length > pair[1]) {
                        setError(`Este campo tiene que ser máximo de ${pair[1]} caracteres`);
                        return false;
                    }
                break;
                default:
                break;
            }
        }
    }

    return true;
  }

  useImperativeHandle(ref, () => {
      return {
          validate: () => validate()
      }
  })

  return (
    <div className="input-wrapper">
      {props.label && <label>{props.label}</label>}
      <input
        placeholder={props.placeholder}
        name={props.name}
        onChange={(event) => HandleChange(event)}
        type={props.type}
        value={props.value ? props.value : value}
        autoComplete={props.autoComplete}
      />
      {error && (
        <p className='error'>{error}</p>
      )}
    </div>
  );
});


InputField.defaultProps = {
    placeholder: '',
    name:'',
    type:'text',
    value:'',
    autoComplete:'off',
    validation: ''
}


export default InputField
