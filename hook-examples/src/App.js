import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import Content from "./Content";

export default function App() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>
    );
}
