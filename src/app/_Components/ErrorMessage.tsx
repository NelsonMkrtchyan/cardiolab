import React from "react";

const ErrorMessage = ({ error }: { error: Error | null }) => {
  return (
    <div className="alert alert-danger" role="alert">
      Error : {error?.message}
    </div>
  );
};

export default ErrorMessage;
