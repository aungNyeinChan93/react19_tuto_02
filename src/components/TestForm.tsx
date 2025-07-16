import React from "react";
import Button from "./Button";

const TestForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (formData: any) => {
    console.log(formData.get("test"));
  };

  return (
    <React.Fragment>
      <section className="w-2/6 mx-auto p-10">
        <form action={handleSubmit} method="POST">
          <input
            type="text"
            name="test"
            id=""
            className="border border-slate-600 rounded"
          />
          <Button>Submit</Button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default TestForm;
