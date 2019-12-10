import React from "react";

const delaymovie = Comp => {
  return function isLoading({ Loading, ...props }) {
    if (!Loading) return <Comp {...props} />;

    return (
      <div className="spinner-border text-success " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
};

export default delaymovie;




