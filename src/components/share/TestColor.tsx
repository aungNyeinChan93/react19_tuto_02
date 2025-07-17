import React from "react";

const TestColor: React.FC<{ color: string; width?: string }> = ({
  color,
  width = "",
}) => {
  //   const bgColor = `bg-${color}-600`;  // tailwindcss not dynamic class not work!
  const boxWidth = width && `${width}rem`;
  return (
    <React.Fragment>
      <section
        style={{ background: color, width: boxWidth }}
        // className={`${boxWidth ? boxWidth : "w-46 "} h-46 rounded p-4`}
        className={`w-46 h-46 rounded p-4`}
      ></section>
    </React.Fragment>
  );
};

export default TestColor;
