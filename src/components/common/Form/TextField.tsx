import React from 'react';
import { useField } from 'formik';

interface Props {
    name: string,
    type?: string,
    placeholder?: string,
}

function TextField({ name, ...restProps }: Props) {
    const [field] = useField(name);
    return <input className="form-control form-control-lg" {...field} {...restProps} />;
} 

export default TextField;
