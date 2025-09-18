import React from "react";
import { useState } from "react";

// function App() {

//       const [hover, setHover] = useState(false);

//       function hoverTrue() {
//         setHover(true)
//       }
//       function hoverFalse() {
//         setHover(false)
//       }

//       const [headingText, setHeadingText] = useState("Hello")
//       function handleClick() {
//         setHeadingText("Clicked")
//       }

//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button style={ {backgroundColor: hover ?  "black" : "white"} }
//       onClick={handleClick}
//       onMouseOver={hoverTrue}
//       onMouseOut={hoverFalse}
//       >Submit</button> 
//     </div>
//   );
// }


function App() {

  const [name, setName] =useState("");
  const [showName, setShowName] = useState(false);
  // const [heading, setHeading] = useState("");    // jeji reseni

  function handleChange(event) {
    console.log(event.target.value);
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
    setName(event.target.value);
  }
  function handleClick() {
    setShowName(true)
    // setHeading(name);  // jeji reseni a uy jen  <h1>Hello {heading}</h1>
  }

  return (
    <div className="container">
      <h1>Hello {showName ? name : null}</h1>
      <input type="text" placeholder="What's your name?"  onChange={handleChange} value={name}/>
      <button
      onClick={handleClick}
      >Submit</button> 
    </div>
  );


  //pokud bych input a button mela soucasti <form> </form>, jeho defaultni chovani je page refresh po submit
  // tedy by mi okamzite jmeno smazal, muzu tomu zabranit, kdyz fci handle click prepisu na 
  //
  // function handleClick(event) {
    // setShowName(true)
    // setHeading(name);  // jeji reseni a uz jen  <h1>Hello {heading}</h1>
    // event.preventDefault();    // zabrani defaultnimu chovani
  // }



}




export default App;
