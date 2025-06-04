import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
        </label>

        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>

        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>

        <Button type="submit" text="Register" />
      </Form>
    </Formik>
  );
}
