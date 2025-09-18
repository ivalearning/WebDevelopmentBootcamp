import React, {useState} from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  let [newTime, setTime] = useState(now);

  function changeTime() {
    const actualTime = new Date().toLocaleTimeString();
    setTime(actualTime);
  }

//setInterval(changeTime, 2000);

  return (
    <div className="container">
      <h1>{newTime}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;



//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
