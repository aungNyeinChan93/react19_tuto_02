import React, { useEffect } from "react";
import useTodoStore from "../store/useTodoStore";

const TestTodo = () => {
  const { todos, setTodos, toogleComplete } = useTodoStore((store) => store);

  const fetchTodos = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const { todos } = await response.json();
    setTodos(todos);
  };
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(todos);

  return (
    <React.Fragment>
      <section>
        {todos &&
          Array.isArray(todos) &&
          todos?.map((todo) => {
            return (
              <div
                onClick={() => toogleComplete(Number(todo.id))}
                className={`w-2/3 mx-auto p-5  shadow rounded my-4 ${
                  todo.completed ? "bg-cyan-100" : "bg-red-400"
                }`}
                key={todo.id}
              >
                {todo.todo}
              </div>
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default TestTodo;
