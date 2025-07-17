import React from "react";

interface ImageProps {
  src: string;
}

const Image: React.FC<ImageProps> = ({ src }) => {
  return (
    <React.Fragment>
      <img alt={src} src={src} className="h-56 w-full object-cover" />
    </React.Fragment>
  );
};

export default Image;
