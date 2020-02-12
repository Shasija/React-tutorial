import React from "react";
const aux = (WrappedComponent, className) => {
  return (props) => (
    <div>
      <WrappedComponent {...props} />
    </div>
  );
};

export default aux;
