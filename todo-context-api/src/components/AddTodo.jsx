import React, { useState } from "react";
import { useTodo } from "../contexts/todoContext.js";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, isComplete: false });
    setTodo("");
  };

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <form onSubmit={add} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Add a new task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-sm outline-none transition focus:border-indigo-500"
        />

        <button
          type="submit"
          className="h-12 rounded-xl bg-indigo-600 px-8 font-medium transition hover:bg-indigo-500"
        >
          Add
        </button>
      </form>
    </section>
  );
}

export default AddTodo;
