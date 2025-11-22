import { useState } from "react";

function AddItem({ handleAddItem }) {
    const [newItem, setNewItem] = useState("");

    function handleClick() {
        if (newItem === "") {
            return;
        }
        setNewItem("");
        handleAddItem(newItem);
    }

    return (
        <>
            <label htmlFor="add-item">Add new item</label>
            <input
                type="text"
                id="add-item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            ></input>
            <button disabled={!newItem} onClick={handleClick}>
                Add item
            </button>
        </>
    );
}

export default AddItem;
