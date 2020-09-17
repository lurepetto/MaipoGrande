import {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';


const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        description: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);



    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
        emailjs.sendForm('gmail', 'register_template', e.target, 'user_d00ZuSyDY0fBVyvK5RLeA')
            .then((result) => {
                console.log(result.text);
    
            }, (error) => {
                console.log(error.text);
            });
    
                // emailjs.sendForm('gmail', 'register_template', e.target, 'user_d00ZuSyDY0fBVyvK5RLeA')
                // .then((result) => {
                //     console.log(result.text);
                // }, (error) => {
                //     console.log(error.text);
                // });
        
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 &&
        isSubmitting) {
            callback();
        }
    }, 
    [errors]
    );

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;