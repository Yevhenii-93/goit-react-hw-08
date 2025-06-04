import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import Button from "../Button/Button";

export default function RegistrationForm() {
  return (
    <Formik
      onSubmit={() => {}}
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
