import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "./ThemeContext";
import { analytics } from "./analytics";

function Content() {
    const boxRef = useRef(null);
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        analytics.track("Theme", theme);
    }, [theme]);

    const handleScroll = () => {
        if (boxRef.current) {
            boxRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <h1>Using Hooks</h1>
            <button onClick={toggleTheme}>
                Toggle Theme (current: {theme})
            </button>
            <button onClick={handleScroll}>Scroll to Box</button>
            <div className="spacer"></div>
            <div ref={boxRef} className="target-btn">
                Target Box
            </div>
        </div>
    );
}

export default Content;
