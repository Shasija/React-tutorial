// import React from "react";
// const aux = (WrappedComponent, className) => {
//   return (props) => (
//     <div>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

const aux = props => {
  return props.children;
};

export default aux;
