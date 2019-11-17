import React from "react";
import { FormikHelpers } from "formik";

import { register } from "../../services/authClient";
import { transformErrors } from "../../utils/formUtils";
import RegisterForm, { FormValues } from "./RegisterForm";

const Register: React.FC = () => {
  const handleSubmit = async (
    values: FormValues,
    { setErrors, setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const { user } = await register({ user: values });
    } catch (error) {
      setErrors(transformErrors(error.errors));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="">Have an account?</a>
            </p>
            <RegisterForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
