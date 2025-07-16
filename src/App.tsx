import React from "react";
import TestAuth from "./components/TestAuth";
// import TestTheme from "./components/TestTheme";
// import TestCounter from "./components/TestCounter";
// import TestForm from "./components/TestForm";
// import TestReactHookForm from "./components/TestReactHookForm";
// import TestUse from "./components/TestUse";

const App = () => {
  return (
    <React.Fragment>
      <section className="text-red-600">
        {/* <TestUse /> */}
        {/* <TestReactHookForm /> */}
        {/* <TestForm /> */}
        {/* <TestTheme /> */}

        {/* <TestCounter /> */}

        <TestAuth />
      </section>
    </React.Fragment>
  );
};

export default App;
