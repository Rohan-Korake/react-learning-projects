import React from "react";
import { useTodo } from "../contexts/todoContext";

function TodoCard() {
  const { todos } = useTodo();

  return (
    <>
      {todos.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Left */}
          <div className="flex items-center gap-3">
            <input type="checkbox" className="h-5 w-5 accent-indigo-500" />

            <p className="text-sm sm:text-base">{item.todo}</p>
          </div>

          {/* Right */}
          <div className="flex gap-2 self-end sm:self-auto">
            <button className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 transition hover:bg-amber-500/20">
              Update
            </button>

            <button className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoCard;
