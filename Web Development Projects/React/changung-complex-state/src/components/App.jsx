import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState(
    {
      fName: "",
      lName: ""
    }
  )

  function handleChange(event) {
    
      const {value, name} = event.target;

      setFullName(previousText => {
        if (name === "fName") {
          return (
            {
              fName: value,
              lName: previousText.lName
            }
          )
        } else if (name === "lName") {
          return (
            {
              fName: previousText.fName,
              lName: value
            }
          )
        }
      }
      )
  }
  
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} />
        <input name="lName" placeholder="Last Name" onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
