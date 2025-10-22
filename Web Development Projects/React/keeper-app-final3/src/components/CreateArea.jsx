import React, { useState } from "react";

function CreateArea(props) {

    const emptyInputs = {title: "", content: ""};
    const [note, setNote] = useState(emptyInputs);

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

    function submitNote(event) {
      props.whenClicked(note)
      event.preventDefault();
      setNote(emptyInputs);
    }

  return (
    <div>
      <form >
        <input name="title" placeholder="Title" onChange={handleChange} type="text" value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} type="text" value={note.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

//   return (
//     <div>
//       <form >
//         <input name="title" placeholder="Title" onChange={handleChange} type="text" value={note.title}/>
//         <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} type="text" value={note.content}/>
//         <button onClick={(event) => {
//          props.whenClicked(note)
//          event.preventDefaults()
//          setNote(emptyInputs)
//           }}>Add</button>
//       </form>
//     </div>
//   );
// }

export default CreateArea;
