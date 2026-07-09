import React from "react";

function AddTodo() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Add a new task..."
          className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-sm outline-none transition focus:border-indigo-500"
        />

        <button className="h-12 rounded-xl bg-indigo-600 px-8 font-medium transition hover:bg-indigo-500">
          Add
        </button>
      </div>
    </section>
  );
}

export default AddTodo;
