import React, { useState } from "react";

const TestState = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "default",
    password: "123123",
  });

  const [theme, setTheme] = useState<string>("light");

  return (
    <React.Fragment>
      <section>
        {formState.name} || {formState.email} |{formState.password} |{theme}
        <button
          type="button"
          className="p-3 bg-red-50 rounde"
          onClick={() =>
            setTheme((pre) => (pre === "light" ? "dark" : "light"))
          }
        >
          Change Theme
        </button>
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
