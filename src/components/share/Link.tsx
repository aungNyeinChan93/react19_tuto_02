import React, { type ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <React.Fragment>
      <a href={href}>
        <h3 className="mt-0.5 text-lg text-gray-900">{children}</h3>
      </a>
    </React.Fragment>
  );
};

export default Link;
