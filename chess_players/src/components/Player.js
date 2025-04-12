import { useState } from "react";

function Player({ player }) {
    const [vote, setVote] = useState(0);

    const leadershipDuration = `World champion for ${player.leadershipDuration} years`;

    function handleVote() {
        setVote(vote + 1);
    }

    return (
        <div className="player-card">
            <img src={player.image} width="150px" />
            <p>{player.name}</p>
            <p>{leadershipDuration}</p>
            <p>{player.country}</p>
            <p>{vote}</p>
            <button onClick={handleVote}>Vote</button>
        </div>
    );
}

export default Player;
