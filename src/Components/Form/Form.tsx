import React from "react";

interface IProps {
  submitFn: any;
  className?: string;
}

const Form: React.SFC<IProps> = ({ submitFn, className, children }) => (
  <form
    onSubmit={event => {
      event.preventDefault();
      submitFn();
    }}
    className={className}
  >
    {children}
  </form>
);

export default Form;
