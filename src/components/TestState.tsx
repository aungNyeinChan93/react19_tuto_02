import React, { useState } from "react";

const TestState = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "default",
    password: "123123",
  });
  return (
    <React.Fragment>
      <section>
        {formState.name} || {formState.email} |{formState.password}
        <form action="">
          <input
            type="text"
            name="name"
            defaultValue={formState.name}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, name: e.target.value + "⭐" }))
            }
          />
        </form>
      </section>
    </React.Fragment>
  );
};

export default TestState;
