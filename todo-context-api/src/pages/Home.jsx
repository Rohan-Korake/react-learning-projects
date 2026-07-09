import React from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <Header />

        <div className="mt-8 space-y-6">
          <AddTodo />
          <TodoList />
        </div>

        <div className="mt-auto pt-8">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Home;
