import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [listOfNotes, setListOfNotes] = useState([]);

    function handleClick(note) {
            setListOfNotes(prevItems => {
                return [...prevItems, note]
            })                        
            //event.preventDefault();   
            console.log(note);         
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
      <CreateArea
       whenClicked={handleClick}
      />
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

