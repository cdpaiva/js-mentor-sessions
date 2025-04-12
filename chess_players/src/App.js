import { players } from "./players";
import Player from "./components/Player";
import "./App.css";

function App() {
    return (
        <div>
            <h1>Chess Players</h1>
            <div className="player-list">
                <Player player={players[0]} />
                <Player player={players[1]} />
                <Player player={players[2]} />
            </div>
        </div>
    );
}

export default App;
