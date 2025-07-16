import React from "react";
import useThemeStore from "../store/useThemeStore";

const TestThemeStore = () => {
  const { theme, changeTheme } = useThemeStore((store) => store);
  return (
    <React.Fragment>
      <section
        className={`${
          theme === "light"
            ? "bg-indigo-500 text-black"
            : " bg-slate-900 text-slate-50"
        } w-full h-screen`}
      >
        {theme}
        <button type="button" onClick={changeTheme}>
          Change Theme
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestThemeStore;
