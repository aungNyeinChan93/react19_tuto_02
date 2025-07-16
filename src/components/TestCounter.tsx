import React from "react";
import useCounterStore from "../store/useCounterStore";

const TestCounter = () => {
  const { count, decrement, increment, reset } = useCounterStore(
    (store) => store
  );

  return (
    <React.Fragment>
      <section>
        {count}
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
        <button type="button" onClick={reset}>
          +
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestCounter;
