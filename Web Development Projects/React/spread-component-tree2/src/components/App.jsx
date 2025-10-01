import React from "react";
import { useState } from "react";

function App() {

  const [input, setInput] = useState("")
  const [toDoItems, setToDoItems] = useState([]);
 
  function handleChange(event) {
    const newInput = event.target.value;

    setInput(newInput);
  }

  function handleClick() {

    setToDoItems(prevValue => {
      return (
        [...prevValue, input]             //??? proc tady musi byt zavorka?
      )
    } 
  )
    setInput("") 
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={input} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoItems.map( item => {
            return (
              <li>{item}</li>
            )
          }
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
