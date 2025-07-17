import React, { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MasterLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <section className="mx-10">
        <Navbar />
        <main className="w-full min-h-screen p-4 border-x-4 border-red-200">
          {children}
        </main>
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default MasterLayout;
