import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/todoContext.js";
import Home from "./pages/Home";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, newTodoText) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: newTodoText } : prevTodo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodoStatus = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isComplete: !prevTodo.isComplete }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && Array.isArray(todos) && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    if (todos && todos.length >= 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodoStatus }}
    >
      <Home />
    </TodoProvider>
  );
}

export default App;
