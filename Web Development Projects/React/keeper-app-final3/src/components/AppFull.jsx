import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import CreateArea from "./CreateArea";

function App() {
    const emptyNote = {title: "", content: ""};
    const [note, setNote] = useState(emptyNote );

    const [listOfNotes, setListOfNotes] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        const fieldName = event.target.name;

        setNote( prevVal => {
            return {
                ...prevVal,
                [fieldName]: newValue
            }
        })
    }

    function handleClick(event) {
            setListOfNotes(prevItems => {
                return [...prevItems, note]
            })                        
            event.preventDefault();   
            console.log(note);
            setNote(emptyNote)           //??   
    }

    function deleteNote(id) {
    setListOfNotes(prevItems => {
      return (
      prevItems.filter( (item, index) => {
        return (index !== id)
        })
      )
    })  
  }

  return (
    <div>
      <Header />
    <div>
      <form >
        <input name="title" placeholder="Title" onChange={handleChange} type="text" value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} type="text" value={note.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
      <div >
        {listOfNotes.map( (n, index) => (
            <Note 
            key={index} 
            id={index}
            title={n.title} 
            content={n.content}
            whenClicked={deleteNote} 
             />
        ))
        }
    </div>
      
      <Footer />
    </div>
  );
}

export default App;

