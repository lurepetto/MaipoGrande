import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const UseForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    lastname: "",
    dni: "",
    rol: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const sendEmail = () => [
    emailjs
      .send("gmail", "register_template", values, "user_d00ZuSyDY0fBVyvK5RLeA")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      ),
  ];

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      sendEmail();
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default UseForm;