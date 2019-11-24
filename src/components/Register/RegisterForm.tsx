import React from "react";
import * as Yup from "yup";
import { FormikHelpers, Formik, Form } from "formik";

import Fieldset from "../common/Form/Fieldset";
import TextField from "../common/Form/TextField";
import FormErrors from "../common/Form/FormErrors";
import Button from "../common/Button";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username is too short")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too Short!")
    .required("Password is required")
});

export interface FormValues {
  username: string;
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void;
}

function RegisterForm({ onSubmit }: Props) {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ errors }) => (
          <>
            <FormErrors<FormValues> errors={errors} />

            <Form>
              <Fieldset>
                <TextField placeholder="Your Name" name="username" />
              </Fieldset>

              <Fieldset>
                <TextField type="email" placeholder="Email" name="email" />
              </Fieldset>

              <Fieldset>
                <TextField
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Fieldset>

              <Button type="submit">Sign up</Button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
