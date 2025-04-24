import "./App.css";
import { langList } from "./langs";

function App() {
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
                    {langList.map((l) => (
                        <tr key={l.id}>
                            <td>{l.name}</td>
                            <td>{l.admired}</td>
                            <td>{l.desired}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
