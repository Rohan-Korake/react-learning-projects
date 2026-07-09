import React from "react";
import TodoCard from "./TodoCard";

function TodoList() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tasks</h2>

        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400">
          4 Tasks
        </span>
      </div>

      <div className="space-y-4">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </section>
  );
}

export default TodoList;
