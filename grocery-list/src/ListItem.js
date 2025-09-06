import { useState } from "react";

function ListItem({ item, handleRemove }) {
    const [selected, setSelect] = useState(false);

    function toogleSelected(item) {
        setSelect(!selected);
    }

    return (
        <div className={selected ? "item selected" : "item"}>
            <p>{item}</p>
            <button onClick={() => toogleSelected()}>
                {selected ? "Clear" : "Select"}
            </button>
            <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
    );
}

export default ListItem;
