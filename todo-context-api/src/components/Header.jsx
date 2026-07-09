import React from "react";

function Header() {
  return (
    <header className="space-y-2 text-center md:text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
        Productivity
      </p>

      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        My Todo List
      </h1>

      <p className="mx-auto max-w-xl text-sm text-zinc-400 md:mx-0 md:text-base">
        Organize your daily work and stay productive.
      </p>
    </header>
  );
}

export default Header;
