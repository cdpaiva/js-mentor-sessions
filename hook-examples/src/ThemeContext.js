import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        document.body.style.backgroundColor =
            theme === "light" ? "#ffffff" : "#121212";
        document.body.style.color = theme === "light" ? "#000000" : "goldenrod";

        if (theme === "light") {
            document.body.classList.add("pulse-effect");
            document.body.classList.remove("fade-effect");
        } else {
            document.body.classList.add("fade-effect");
            document.body.classList.remove("pulse-effect");
        }

        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
