import React from "react";
import { FormikErrors } from 'formik';

interface Props<T> {
    errors: FormikErrors<T>,
}

function FormErrors<T>({ errors }: Props<T>) {
  return (
    <ul className="error-messages">
      {Object.entries(errors).map(([fieldName, errorMessage]) => (
        <li key={fieldName}>{errorMessage as string}</li>
      ))}
    </ul>
  );
}

export default FormErrors;
