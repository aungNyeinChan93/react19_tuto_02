import React, { use } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const TestTheme = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <React.Fragment>
      <section
        className={`w-full h-screen ${
          theme === "light"
            ? "bg-slate-50 text-black"
            : "text-white bg-slate-900"
        }`}
      >
        {theme}
        <button
          type="button"
          onClick={() => toggleTheme()}
          className={`${
            theme === "light"
              ? " bg-white text-dark"
              : "bg-slate-900 text-white"
          }`}
        >
          Change Theme
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestTheme;
