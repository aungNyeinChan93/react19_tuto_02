import React from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { changeTheme } from "../features/Theme/themeSlice";

const Theme = () => {
  const { theme } = useAppSelector((store) => store.theme);
  const appDispatch = useAppDispatch();
  return (
    <React.Fragment>
      <section
        className={`${
          theme === "light"
            ? "bg-slate-100 text-black"
            : " bg-slate-900 text-slate-100"
        } w-full h-screen`}
      >
        {theme}
        <button type="button" onClick={() => appDispatch(changeTheme())}>
          Change Theme
        </button>
      </section>
    </React.Fragment>
  );
};

export default Theme;
