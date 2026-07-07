import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import useTheme, { ThemeProvider } from "./contexts/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="w-full flex justify-center items-center flex-col min-h-screen bg-slate-100 px-6 py-10 transition-colors duration-300  dark:bg-slate-950">
        <ThemeButton />

        <div className="mt-10 flex justify-center">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
