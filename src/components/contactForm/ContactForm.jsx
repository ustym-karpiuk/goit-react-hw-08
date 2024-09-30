import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch =useDispatch();
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(50, "Must be 50 characters or less")
          .required("Required"),
        number: Yup.string()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(3, "Must be at least 3 characters")
          .max(50, "Must be 50 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      <Form className={styles.contactFormStyle}>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="number">Number</label>
        <Field
          type="text"
          id="number"
          name="number"
          pattern="[0-9]*"
          placeholder="Enter number..."
        />
        <ErrorMessage name="number" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;