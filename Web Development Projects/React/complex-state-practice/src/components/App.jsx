import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {

    // const newValue = event.target.value;
    // const name = event.target.name;

    const {value, name} = event.target;

    setContact(oldText => {

      if (name === "fName") { 
        return (
          {
            fName: value,
            lName: oldText.lName,
            email: oldText.email
          }
        )
      } else if (name === "lName") {
        return (
          {
            fName: oldText.fName,
            lName: value,
            email: oldText.email
          }
        )
      } else if (name === "email") {
        return (
          {
            fName:oldText.fName,
            lName: oldText.lName,
            email: value
          }
        )
      }
    }
    )
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" value = {contact.fName} placeholder="First Name" onChange={handleChange} />
        <input name="lName" value = {contact.lName} placeholder="Last Name" onChange={handleChange}/>
        <input name="email" value = {contact.email} placeholder="Email" onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
