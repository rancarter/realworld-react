import React from "react";
import { Link, Redirect } from "react-router-dom";
import { FormikHelpers } from "formik";

import { ROUTES } from "../../constants";
import { useAuth } from "../../context/authContext";
import { transformErrors } from "../../utils/formUtils";
import RegisterForm, { FormValues } from "./RegisterForm";

function Register() {
  const { register, isAuthorized } = useAuth();

  async function handleSubmit(
    values: FormValues,
    { setErrors, setSubmitting }: FormikHelpers<FormValues>
  ) {
    try {
      await register({ user: values });
    } catch (error) {
      setErrors(transformErrors(error.errors));
    } finally {
      setSubmitting(false);
    }
  }

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to={ROUTES.login}>Have an account?</Link>
            </p>
            <RegisterForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
