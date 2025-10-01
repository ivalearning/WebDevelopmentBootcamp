import React from "react";
import { useState } from "react";

function App() {

  const [fullName, setFullName] = useState(
    {
      fName: "",
      lName: ""
    }
  );

  function handleChange(event) {

    // const enteredName = event.target.value;
    // const fieldName = event.target.name;

    // setFullName( prevValue => {
    //   if (fieldName==="fName") { 
    //     return {
    //       fName: enteredName,
    //       lName: prevValue.lName
    //     }
    //   } else if ( fieldName==="lName") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: enteredName
    //     }
    //   }
    // })
 
  const {name, value} = event.target;

   setFullName( prevValue => {
      if (name==="fName") { 
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if ( name==="lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })

  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleChange} value = {fullName.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value = {fullName.lName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

// function App() {

//   const [fName, setfName] = useState("");
//   const [lName, setlName] = useState("");

// function setFirstName(event) {
//   setfName(event.target.value)
// }

// function setLastName(event) {
//   setlName(event.target.value)
// }

//   return (
//     <div className="container">
//       <h1>Hello {fName} {lName}</h1>
//       <form>
//         <input onChange={setFirstName} value={fName} name="fName" placeholder="First Name" />
//         <input onChange={setLastName} value={lName} name="lName" placeholder="Last Name" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
