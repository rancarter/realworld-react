import React from "react";
import { Link, Redirect } from "react-router-dom";
import { FormikHelpers } from "formik";

import { ROUTES } from "../../constants";
import { useAuth } from "../../context/authContext";
import LoginForm, { Values } from "./LoginForm";

function Login() {
  const { login, isAuthorized } = useAuth();

  async function handleSubmit(
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>
  ) {
    try {
      await login({ user: values });
    } catch (error) {
      setErrors({ email: "Invalid email or password" });
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
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to={ROUTES.article}>Need an account?</Link>
            </p>
            <LoginForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
