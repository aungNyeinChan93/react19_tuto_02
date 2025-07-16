import React, { type ReactNode } from "react";
import { useFormStatus } from "react-dom";

const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pending, method } = useFormStatus();
  console.log(pending);
  console.log(method);

  return (
    <React.Fragment>
      <button
        disabled={pending}
        className={`${
          pending ? "bg-red-600 text-white" : "bg-green-600 text-white"
        }`}
        type="submit"
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;
