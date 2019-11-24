import React from "react";

interface Props {
    buttonType?: string,
}

function Button(props: any) {
  return (
    <button className="btn btn-lg btn-primary pull-xs-right" {...props} />
  );
}

export default Button;
