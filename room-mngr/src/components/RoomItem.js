import { useState } from "react";

function isRoomReady(room) {
    let numGuests = 0;
    for (let value of Object.values(room.occupancy)) {
        numGuests += value;
    }
    return numGuests > 0;
}

function RoomCard({ room }) {
    const ready = isRoomReady(room);
    const previewCardStyle = ready
        ? "room-card-preview"
        : "room-card-preview room-not-ready";
    return (
        <div className={previewCardStyle}>
            <p>
                <strong>Size:</strong> {room.size.value} {room.size.unit}
            </p>
            <p>
                <strong>Occupancy:</strong> {room.occupancy.max_guests} guests
            </p>
        </div>
    );
}

function RoomItem({ room }) {
    const [showPreview, setShowPreview] = useState(false);
    const ready = isRoomReady(room);

    function handleChangePreview() {
        setShowPreview((prev) => !prev);
    }

    const showPreviewBtnText = showPreview ? "Hide Preview" : "Show Preview";

    return (
        <div className="room-card">
            <h3>{room.partner_reference_name || room.unit_name_fallback}</h3>
            <div className="room-card-top-row">
                <p>Status: {ready ? "Ready to Check" : "Incomplete"}</p>
                <button onClick={handleChangePreview}>
                    {showPreviewBtnText}
                </button>
            </div>
            {showPreview && <RoomCard room={room} />}
        </div>
    );
}

export default RoomItem;
