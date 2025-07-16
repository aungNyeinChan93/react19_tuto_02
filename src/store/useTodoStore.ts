import { create } from "zustand";


interface Todo {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
};

interface TodoStore {
    todos: Todo[],
    setTodos: (newTodos: Todo[]) => void,
    toogleComplete: (id: number) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    setTodos: (newTodo: Todo[]) => set(() => ({ todos: newTodo })),
    toogleComplete: (id: number) =>
        set(state => ({ todos: state.todos.map(todo => todo.id == id ? { ...todo, completed: !todo.completed } : todo) }))
}));


export default useTodoStore;