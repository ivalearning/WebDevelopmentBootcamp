import React from "react";
import { useState } from "react";

function CreateArea(props) {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function addNote(event) {
    console.log("added");
    const newNote = event.target.value;
    
    setNote(newNote);
    event.preventDefault();
  }
  function addTitle(event) {
    console.log("added");
    const newTitle = event.target.value;
    
    setTitle(newTitle);
    event.preventDefault();   
  }
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={addTitle} value={title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={addNote} value={note}/>
        <button onClick= { () => {
          props.handleClick(inputText)
          // setTitle("")
          // setNote("");
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
