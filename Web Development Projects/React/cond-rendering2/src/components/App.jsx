import React, {useState} from "react";
import Form from "./Form";

var userIsRegistered = false;


function App() {

    const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  };
  function decrease() {
    setCount(count - 1)
  };
  return (
    <div className="container">

       <Form isRegistered={userIsRegistered}/> 

       <h1>{count}</h1>
       <button onClick={decrease}> - </button>&nbsp;&nbsp;&nbsp;
       <button onClick={increase}> + </button>

    </div>
  );
}

export default App;


//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.