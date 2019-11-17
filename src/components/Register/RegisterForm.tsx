import React from "react";
import * as Yup from "yup";
import { Formik, FormikErrors } from "formik";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username is too short')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),  
  password: Yup.string()
    .min(2, 'Password is too Short!')
    .required('Password is required'),
});

export interface FormValues {
  username: string;
  email: string;
  password: string;
}

interface Props {
  onSubmit: (args: FormValues) => void;
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const renderErrors = (errors: FormikErrors<FormValues>) => (
    <ul className="error-messages">
      {Object.values(errors).map(error => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <div>
          {renderErrors(errors)}
          <form onSubmit={handleSubmit}>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </fieldset>
            <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
