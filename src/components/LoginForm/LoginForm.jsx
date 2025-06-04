import { Field, Formik, Form } from "formik";
import css from "./LoginForm.module.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>

        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>

        <Button type="submit" text="Log In" />
      </Form>
    </Formik>
  );
}
