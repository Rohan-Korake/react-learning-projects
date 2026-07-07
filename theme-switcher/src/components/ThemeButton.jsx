import { Moon, Sun } from "lucide-react";
import useTheme from "../contexts/Theme";

function ThemeButton() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeBtn = () => {
    themeMode === "dark" ? lightTheme() : darkTheme();
  };

  return (
    <button
      onClick={onChangeBtn}
      className="group flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900 px-2 py-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
          themeMode === "dark"
            ? "bg-slate-700 text-yellow-300"
            : "bg-yellow-400 text-white"
        }`}
      >
        {themeMode === "dark" ? <Moon size={20} /> : <Sun size={20} />}
      </div>

      <span className="pr-3 font-medium text-white">
        {themeMode === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}

export default ThemeButton;
