import { useState } from "react";

function ToDoItem(props) {
    return (
        <div onClick={()=> {
            props.whenClicked(props.id);

        }}>
            <li>{props.toDoItem}</li>
        </div>
    )
}

export default ToDoItem;

