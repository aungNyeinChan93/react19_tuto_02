import React from "react";
import { type RootState } from "../store";
import { increment, decrement, reset } from "../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../hook";

const TestReduxCounter = () => {
  const { count } = useAppSelector((store: RootState) => store.counter);
  const appDispatch = useAppDispatch();
  return (
    <React.Fragment>
      <section>
        <h4 className="text-2xl text-red-600">{count}</h4>
        <button type="button" onClick={() => appDispatch(increment())}>
          +
        </button>
        <button type="button" onClick={() => appDispatch(decrement())}>
          -
        </button>
        <button type="button" onClick={() => appDispatch(reset())}>
          reset
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestReduxCounter;
