import React, { useState } from "react";

function CreateRoom({ onAddRoom }) {
    const [name, setName] = useState("");
    const [guests, setGuests] = useState(2);
    const [size, setSize] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRoom = {
            unit_id: Date.now(),
            partner_reference_name: name,
            smoking_policy: "NONSMOKING",
            size: { value: size, unit: "SQM" },
            occupancy: {
                max_guests: parseInt(guests),
                max_adults: parseInt(guests),
                max_children: 0,
            },
        };

        onAddRoom(newRoom);
        setName("");
        setGuests(2);
        setSize(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a Room</h2>
            <div className="create-room-form">
                <div className="create-room-control">
                    <label>Name: </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="create-room-control">
                    <label>Guests: </label>
                    <input
                        type="number"
                        min="0"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                </div>
                <div className="create-room-control">
                    <label>Size: </label>
                    <input
                        type="number"
                        min="1"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit">Add Room</button>
        </form>
    );
}

export default CreateRoom;
