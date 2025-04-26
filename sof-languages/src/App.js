import { useState } from "react";
import "./App.css";
import { langList } from "./langs";

function getInitialLangState() {
    return {
        name: "",
        admired: "",
        desired: "",
    };
}

function App() {
    const [languages, setLanguages] = useState(langList);
    const [newLanguage, setNewLanguage] = useState(getInitialLangState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewLanguage((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddNewLanguage = () => {
        const { name, admired, desired } = newLanguage;
        if (languages.find((l) => l.name === name)) {
            return;
        }
        if (name && admired && desired) {
            setLanguages((prev) => [
                ...prev,
                {
                    name,
                    admired: parseFloat(admired),
                    desired: parseFloat(desired),
                },
            ]);
            setNewLanguage(getInitialLangState());
        }
    };
    return (
        <div className="container">
            <h1>Admired and desired programming languages</h1>
            <table className="lang-table">
                <thead>
                    <tr>
                        <th>Language</th>
                        <th>A</th>
                        <th>D</th>
                    </tr>
                </thead>
                <tbody>
                    {languages.map((l) => (
                        <tr key={l.name}>
                            <td>{l.name}</td>
                            <td>{l.admired}</td>
                            <td>{l.desired}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-lang-controls">
                <label htmlFor="lang-name">Language name</label>
                <input
                    id="lang-name"
                    type="text"
                    name="name"
                    value={newLanguage.name}
                    onChange={handleChange}
                    placeholder="Language name"
                />
                <label htmlFor="lang-admired">
                    Would you continue to use this language?
                </label>
                <input
                    id="lang-admired"
                    type="text"
                    name="admired"
                    value={newLanguage.admired}
                    onChange={handleChange}
                    placeholder="0 - 100"
                />
                <label htmlFor="lang-desired">
                    Would you want to start using this language?
                </label>
                <input
                    id="lang-desired"
                    type="text"
                    name="desired"
                    value={newLanguage.desired}
                    onChange={handleChange}
                    placeholder="0 - 100"
                />
                <button onClick={handleAddNewLanguage}>Add Language</button>
            </div>
        </div>
    );
}

export default App;
