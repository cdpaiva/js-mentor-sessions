import "./styles.css";
import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";

export default function App() {
    const [items, setItems] = useState(["milk", "eggs", "coffee", "bread"]);

    function handleAddItem(newItem) {
        setItems([newItem, ...items]);
    }

    function handleRemove(item) {
        setItems(items.filter((i) => i !== item));
    }

    return (
        <div className="App">
            <h1>Grocery List</h1>
            <AddItem handleAddItem={handleAddItem} />
            <ul>
                {/* Ooops! List of items rendered withouy `key` prop: */}
                {/* Adding or sorting items results in inconsistent state */}
                {items.map((item) => (
                    <ListItem item={item} handleRemove={handleRemove} />
                ))}
            </ul>
        </div>
    );
}
