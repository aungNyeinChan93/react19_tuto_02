import React from "react";

interface FooterParagrahProps {
  text: string;
}
const FooterParagraph: React.FC<FooterParagrahProps> = ({ text }) => {
  return (
    <React.Fragment>
      <section>
        <div>
          <p className="mt-4 text-gray-500">{text}</p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FooterParagraph;
