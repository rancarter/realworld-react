import React from "react";
import * as Yup from "yup";
import { useFormik, FormikHelpers, FormikErrors } from "formik";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too Short!")
    .required("Password is required")
});

export interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void;
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: SignupSchema,
    onSubmit,
  });

  return (
    <div>
      <ul className="error-messages">
        {Object.values(formik.errors).map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={formik.handleSubmit}>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </fieldset>
        <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
