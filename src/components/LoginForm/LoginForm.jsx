import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const userSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password too short")
    .max(50, "Password too long")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(user));
    actions.resetForm();
  };
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form className={css.form}>
          <div className={css.wrapper}>
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
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;