import React from "react";

interface Props {
  children: React.ReactNode;
}

function Fieldset({ children }: Props) {
  return <fieldset className="form-group">{children}</fieldset>;
}

export default Fieldset;
