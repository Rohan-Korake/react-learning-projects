import React from "react";
import { useTodo } from "../contexts/todoContext";

function TodoCard() {
  const { todos, updateTodo, deleteTodo, toggleTodoStatus } = useTodo();

  const todosToDisplay =
    todos.length === 0
      ? [
          { id: 101, todo: "Type a task and hit Add", isComplete: false },
          {
            id: 102,
            todo: "Click the checkbox to mark as complete",
            isComplete: false,
          },
        ]
      : todos;

  return (
    <>
      {todosToDisplay &&
        todosToDisplay.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700 sm:flex-row sm:items-center sm:justify-between"
          >
            {/* Left */}
            <div className="flex items-center gap-3 flex-grow">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => toggleTodoStatus(item.id)}
                className="h-5 w-5 accent-indigo-500"
              />
              <input
                type="text"
                value={item.todo}
                onChange={(e) => updateTodo(item.id, e.target.value)}
                className={`flex-grow w-full bg-transparent outline-none text-sm sm:text-base text-white ${item.isComplete ? "line-through text-zinc-500" : "text-white"}`}
              />
            </div>

            {/* Right */}
            <button
              onClick={() => deleteTodo(item.id)}
              className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
}

export default TodoCard;
