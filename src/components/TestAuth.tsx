import React, { useEffect } from "react";
import useAuthStore from "../store/useAuthStore";

const TestAuth = () => {
  const { user, setUser, changePassword } = useAuthStore((store) => store);

  useEffect(() => {
    setUser({ name: "chan", email: "chan@123", password: "1231231323" });
  }, [setUser]);
  return (
    <React.Fragment>
      <section>
        <div className="flex justify-center items-center w-full h-screen">
          {user.name}|{user.email}|{user.password}
          <button type="button" onClick={() => changePassword("321321")}>
            Change Password
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TestAuth;
