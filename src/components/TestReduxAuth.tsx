import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import type { RootState } from "../store";
import { setUser, changePassword } from "../features/auth/authSlice";

const TestReduxAuth = () => {
  const { user } = useAppSelector((store: RootState) => store.auth);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(
      setUser({ name: "aung", email: "aung@123", password: "123123123" })
    );
  }, [appDispatch]);
  return (
    <React.Fragment>
      <section>
        <h3 className="text-2xl text-red-500">{user.name}</h3>
        <h3 className="text-2xl text-red-500">{user.email}</h3>
        <h3 className="text-2xl text-red-500">{user.password}</h3>

        <button
          type="button"
          onClick={() => appDispatch(changePassword("432123123123"))}
        >
          Change Password
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestReduxAuth;
