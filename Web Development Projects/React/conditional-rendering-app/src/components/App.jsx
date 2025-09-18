import React from "react";
import Login from "./Login";

// Ternary operator sytax: condition ? if true : if false cele je expression a tudiz se da zde pouzit, if/else statement by tam byt nemohl
// isLogged === true neni treb uvadet, staci isLogged 

let isLogged = false;
let currentHour = new Date().getHours();
//console.log(currentHour);


function App() {
  return (
    <div className="container">

    { //isLogged  ? <h1>Hello</h1> : <Login />
    
    //currentHour > 16 ? <h1>Why are u still working?</h1> : null // pokud v pripade false nechci zobrazit nic
    currentHour > 16 && <h1>Why are u still working?</h1>   // da se zapsat i takto za pouyiti 2 podminek, 
    // pokud je prvni true, tak react pokracuje na 2 a vzkresi h1, pokud je false, tak skonci a k 2. se nedostane, tedy nic nevykresli
    }
    </div>
  );
}

export default App;
