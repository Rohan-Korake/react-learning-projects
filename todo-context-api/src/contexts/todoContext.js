import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1783841748121,
      todo: "Context Api with LocalStorage",
      isCompete: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodoStatus: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
