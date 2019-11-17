import React from "react";

import { register } from "../../services/authClient";
import useFetch from "../../hooks/useFetch";
import RegisterForm, { FormValues } from "./RegisterForm";

const Register: React.FC = () => {
  const [runRegister, { isFetching, data, error }] = useFetch((params) => register(params));

  const handleSubmit = (user: FormValues) => {
    runRegister({ user });
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
            ` <RegisterForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
