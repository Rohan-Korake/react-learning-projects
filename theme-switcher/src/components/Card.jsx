import React from "react";

function Card() {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/20 dark:border-slate-700 dark:bg-slate-900 sm:max-w-md lg:max-w-xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1662351557356-bf3b79fe19d4?q=80&w=2336&auto=format&fit=crop"
          alt="Developer Workspace"
          className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-60 md:h-64 lg:h-72"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent dark:from-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-5 sm:space-y-6 sm:p-7 lg:p-8">
        {/* Badge */}
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 sm:px-4 sm:py-2 sm:text-sm">
          React Context API
        </span>

        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
            Theme Switch Demo
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base lg:text-lg">
            Automatically switch between Light and Dark themes using React
            Context API. Built with reusable components, responsive layouts, and
            Tailwind CSS.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {["⚛ React", "🎨 Tailwind CSS", "🌙 Context API"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 sm:py-4 sm:text-base lg:text-lg">
          Explore Project →
        </button>
      </div>
    </div>
  );
}

export default Card;
