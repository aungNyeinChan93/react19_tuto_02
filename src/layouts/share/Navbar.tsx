import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className="mt-1 h-auto p-4 w-full bg-slate-300 rounded-t-2xl ">
          <div className="flex flex-col sm:flex-row justify-between px-4 items-center ">
            <div className="logo text-2xl text-red-600  uppercase">
              Design Pattern
            </div>
            <div className="flex justify-around items-center space-x-10">
              <ul className="flex justify-around items-center space-x-4 text-lg capitalize">
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>profile</li>
              </ul>
              <div className="auth flex justify-around space-x-1.5 ">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-slate-50  bg-indigo-400"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-slate-50  bg-indigo-400"
                >
                  logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
