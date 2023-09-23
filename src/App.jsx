import { ThemeProvider } from "./context/theme";
import React, { useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = React.useState("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <div className="min-h-screen max-w-screen dark:bg-gray-700 dark:text-white flex">
        <p className="text-2xl font-bold mx-auto">Theme Toggler</p>

        <input type="checkbox" id="toggle"
          onChange={toggleTheme}
          // toggle button
            className="appearance-none checked:bg-blue-600 checked:translate-x-6 checked:ring-2 checked:ring-blue-600 h-6 w-12 rounded-full bg-gray-300 focus:outline-none" 
        />

      </div>
    </ThemeProvider>
  )
}

export default App;
