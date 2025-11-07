import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {

  const [listOfNotes, setListOfNotes] = useState([])

  function createList(i, index) {
    return (
      <Note 
      key = {index}
      title = {i.title}
      content = {i.note}
      />
    )
  }

    function handleClick(inputText) {
    console.log(title);
    console.log(note);

    // setListOfNotes( prevText => {
    //   return [...prevText, inputText];
    // })   
    preventDefault(); 
    console.log(listOfNotes);
    
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick = {handleClick} />
      {listOfNotes.map((item, index) => {
        <Note 
        key = {index}
        title = {item.title}
        content = {item.note}
        />
      }
      )}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}


export default App;
