import React from "react";

const Loader = () => {
  return (
    <div className="ptb-100 pb-100 py-10 text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
