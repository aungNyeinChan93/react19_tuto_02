import React from "react";
import FooterParagraph from "./FooterParagraph";
import FooterForm from "./FooterForm";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <React.Fragment>
      <section className="border-3 border-green-500 rounded my-2 bg-slate-50">
        <footer className="">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-start lg:gap-8">
              <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                {/* parageaph */}
                <div className="col-span-2">
                  <FooterParagraph
                    text={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  provident dicta iste.`}
                  />
                </div>

                {/* form */}
                <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                  <FooterForm />
                </div>

                {/* Services */}
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-medium text-gray-900">Services</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        1on1 Coaching{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Company Review{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Accounts Review{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        HR Consulting{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        SEO Optimisation{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-medium text-gray-900">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        About{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Meet the Team{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Accounts Review{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Helpful */}
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-medium text-gray-900">Helpful Links</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Contact{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        FAQs{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Live Chat{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-medium text-gray-900">Legal</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Accessibility{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Returns Policy{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Refund Policy{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Hiring-3 Statistics
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Download */}
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-medium text-gray-900">Downloads</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Marketing Calendar{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        SEO Infographics{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* icon */}
                <FooterIcons />
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <div className="sm:flex sm:justify-between">
                {/* Copy Right */}
                <p className="text-xs text-gray-500">
                  &copy; 2022. Company Name. All rights reserved.
                </p>

                {/* Term and Conditions | Piolicies */}
                <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Cookies{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </React.Fragment>
  );
};

export default Footer;
