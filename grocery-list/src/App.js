import "./styles.css";
import { useState } from "react";
import ListItem from "./ListItem";

export default function App() {
    const [items, setItems] = useState(["milk", "eggs", "coffee", "bread"]);
    const [newItem, setNewItem] = useState("");

    function addOne() {
        if (!newItem) {
            return;
        }
        setItems([newItem, ...items]);
        setNewItem("");
    }

    function order() {
        const orderedItems = [...items.sort()];
        setItems(orderedItems);
    }

    function handleRemove(item) {
        setItems(items.filter((i) => i !== item));
    }

    return (
        <div className="App">
            <h1>You need keys to dynamic lists!</h1>
            <label id="add-item">Add new item</label>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                htmlFor="add-item"
            ></input>
            {/* Adding or sorting items results in inconsistent state */}
            <button onClick={addOne}>Add item</button>
            <button onClick={order}>Sort</button>
            <ul>
                {/* Ooops! List of items rendered withouy `key` prop: */}
                {items.map((item) => (
                    <ListItem item={item} handleRemove={handleRemove} />
                ))}
            </ul>
        </div>
    );
}
