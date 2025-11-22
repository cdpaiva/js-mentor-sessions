import { useState } from "react";

function ListItem({ item, handleRemove }) {
    const [selected, setSelect] = useState(false);

    function toggleSelected() {
        setSelect(!selected);
    }

    return (
        <li className={selected ? "item selected" : "item"}>
            <p>{item}</p>
            <button onClick={toggleSelected}>
                {selected ? "To Buy" : "Done"}
            </button>
            <button onClick={() => handleRemove(item)}>Remove</button>
        </li>
    );
}

export default ListItem;
