import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {

  const [listOfNotes, setListOfNotes] = useState([]);

    function addItem(inputText) {
    setListOfNotes(prevItems => {
      return [...prevItems, inputText];
    });
 
  }

  function deleteNote() {
    console.log("deleted?");
    
  }



  return (
    <div>
      <Header />
      <CreateArea />

      {listOfNotes.map( (item, index) => {
        <Note  
        key = {index}
        title = {item.title}
        content = {item.content}
        />
      }
      )}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;



//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.
