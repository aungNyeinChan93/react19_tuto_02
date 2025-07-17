import React, { type ReactNode } from "react";

const Paragrap: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        {children}
      </p>
    </React.Fragment>
  );
};

export default Paragrap;
