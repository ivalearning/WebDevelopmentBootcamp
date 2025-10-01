import React, {useState} from "react";
import List from "./List";


function createList(li) {
  return (
    <List 
    key = {li.id}
    listItem = {li.content}  
    />
  )};

function App() {

  const [newItem, setNewItem] = useState("");
  const [listOfItems, setListOfItems] = useState([]);

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function addToList() {
    const newId = listOfItems.length +1;
    const newRow = {id: newId, content: newItem}
    setListOfItems(prevList => {
      return [...prevList, newRow]
    }); 
    console.log(newRow);    
    setNewItem("");
  }

  function deleteItem(nr) {
    console.log(nr + " to be deleted");
    
    setListOfItems(prevList => {
      return prevList.filter((item) => {        
        return item.id !== nr
      });
    });
  }
    
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={newItem}/>
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listOfItems.map((item) => (
            <List 
            key = {item.id}
            id = {item.id}
            listItem = {item.content}
            isDone = {deleteItem}
            />
          )
          )}          
        </ul>
      </div>
    </div>
  );
  }

export default App;

// {list.map(createList)}