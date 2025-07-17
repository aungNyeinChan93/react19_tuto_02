import React from "react";

const FooterForm = () => {
  return (
    <React.Fragment>
      <section className="w-full">
        <form className="w-full">
          <label htmlFor="UserEmail" className="sr-only">
            {" "}
            Email{" "}
          </label>

          <div className="border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4">
            <input
              type="email"
              id="UserEmail"
              placeholder="john@rhcp.com"
              className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
            />

            <button
              type="submit"
              className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
            >
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default FooterForm;

<form className="w-full">
  <label htmlFor="UserEmail" className="sr-only">
    {" "}
    Email{" "}
  </label>

  <div className="border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4">
    <input
      type="email"
      id="UserEmail"
      placeholder="john@rhcp.com"
      className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
    />

    <button className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
      Sign Up
    </button>
  </div>
</form>;
