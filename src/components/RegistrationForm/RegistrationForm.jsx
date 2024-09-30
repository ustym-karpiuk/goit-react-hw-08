import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password too short")
    .max(50, "Password too long")
    .required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(newUser));
    actions.resetForm();
  };
  return (
    <div>
      <h2>Register a new user</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form className={css.form}>
          <div className={css.wrapper}>
            <div className={css.inputWrapper}>
              <label htmlFor={nameId}>Name</label>
              <Field type="text" name="name" id={nameId}></Field>
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>

            <div className={css.inputWrapper}>
              <label htmlFor={emailId}>Email</label>
              <Field type="email" name="email" id={emailId}></Field>
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </div>

            <div className={css.inputWrapper}>
              <label htmlFor={passwordId}>Password</label>
              <Field type="password" name="password" id={passwordId}></Field>
              <ErrorMessage
                className={css.error}
                name="password"
                component="span"
              />
            </div>
          </div>

          <button className={css.btn} type="submit">
            Registration
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;