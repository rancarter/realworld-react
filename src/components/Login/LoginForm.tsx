import React from "react";
import * as Yup from "yup";
import { Formik, Form, FormikHelpers } from "formik";

import Fieldset from "../common/Form/Fieldset";
import TextField from "../common/Form/TextField";
import FormErrors from "../common/Form/FormErrors";
import Button from "../common/Button";

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too Short!")
    .required("Password is required")
});

export interface Values {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values, helpers: FormikHelpers<Values>) => void;
}

function LoginForm({ onSubmit }: Props) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={Schema}
      onSubmit={onSubmit}
    >
      {({ errors }) => (
        <div>
          <FormErrors<Values> errors={errors} />
          <Form>
            <Fieldset>
              <TextField type="email" placeholder="Email" name="email" />
            </Fieldset>

            <Fieldset>
              <TextField
                name="password"
                type="password"
                placeholder="Password"
              />
            </Fieldset>

            <Button type="submit">Sign in</Button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;
