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
    const [sortKey, setSortKey] = useState("admired");

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

    const handleSort = () => {
        const sortedLanguages = languages.toSorted((a, b) => {
            if (a[sortKey] > b[sortKey]) return -1;
            if (a[sortKey] < b[sortKey]) return 1;
            return 0;
        });
        setLanguages(sortedLanguages);
    };

    const handleKeySelect = (e) => {
        setSortKey(e.target.value);
    };

    return (
        <div className="container">
            <h1>Admired and desired programming languages</h1>
            <div>
                <div className="sort-radios">
                    <input
                        type="radio"
                        id="name"
                        name="sortKey"
                        value={"name"}
                        checked={sortKey === "name"}
                        onChange={handleKeySelect}
                    ></input>
                    <label htmlFor="name">Name</label>
                    <input
                        type="radio"
                        id="admired"
                        name="sortKey"
                        value={"admired"}
                        checked={sortKey === "admired"}
                        onChange={handleKeySelect}
                    ></input>
                    <label htmlFor="admired">Admired</label>
                    <input
                        type="radio"
                        id="desired"
                        name="sortKey"
                        value={"desired"}
                        checked={sortKey === "desired"}
                        onChange={handleKeySelect}
                    ></input>
                    <label htmlFor="desired">Desired</label>
                </div>
                <button onClick={handleSort}>Sort</button>
            </div>
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
