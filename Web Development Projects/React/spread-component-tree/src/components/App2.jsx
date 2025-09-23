import React, {useState} from "react";

function App() {


  const [newItem, setNewItem] = useState("");
  const [listItem, setListItem] = useState([]);

  function getNewItem(event) {
    setNewItem(event.target.value);
    }

  function addNewItem() {
    setListItem ( prevItems => {
      return [...prevItems, newItem]; 
    });
     //console.log(newItem);
    setNewItem("");                           // nefunguje smazani textu, proc?
    //console.log(newItem);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={getNewItem}/>
        <button onClick={addNewItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map(toDoItem => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
