import React, { useReducer } from "react";

const TestReducer = () => {
  const initialState = {
    count: 0,
    other: "counter Reducer",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count++ };
      case "decrement":
        return { ...state, count: state.count-- };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <section>
        {state.count} || {state.other}
        <button type="button" onClick={() => dispatch({ type: "increment" })}>
          +
        </button>
        <button type="button" onClick={() => dispatch({ type: "decrement" })}>
          -
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestReducer;
