import { useState } from "react";
import CreateRoom from "./components/CreateRoom";
import RoomList from "./components/RoomList";
import { initialRooms } from "./rooms";

function App() {
    const [rooms, setRooms] = useState(initialRooms);

    function addRoom(newRoom) {
        setRooms([...rooms, newRoom]);
    }

    return (
        <div className="App">
            <h1>Room Manager</h1>
            <CreateRoom onAddRoom={addRoom} />
            <RoomList rooms={rooms} />
        </div>
    );
}

export default App;
