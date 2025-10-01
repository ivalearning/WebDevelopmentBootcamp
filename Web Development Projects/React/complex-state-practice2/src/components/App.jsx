import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {

    const {name, value} = event.target;

    setContact( prevText => {
      
        if (name==="fName") {
          return {
            fName: value,
            lName: prevText.lName,
            email: prevText.email
          } 
      } else if (name==="lName") {
        return {
            fName: prevText.fName,
            lName: value,
            email: prevText.email
        }
      } else if (name==="email") {
        return {
            fName: prevText.fName,
            lName: prevText.lName,
            email: value         
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange = {handleChange} value = {contact.fName} name="fName" placeholder="First Name" />
        <input onChange = {handleChange} value = {contact.lName} name="lName" placeholder="Last Name" />
        <input onChange = {handleChange} value = {contact.email} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
