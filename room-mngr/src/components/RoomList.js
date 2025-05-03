import RoomItem from "./RoomItem";

function RoomList({ rooms }) {
    return (
        <div>
            {rooms.map((r) => (
                <RoomItem room={r} key={r.unit_id} />
            ))}
        </div>
    );
}

export default RoomList;
