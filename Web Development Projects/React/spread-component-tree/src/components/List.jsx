import { useState } from "react";

function createList(props) {
  return (
      <div onClick={() => {
        props.isDone(props.id)
      }}
      >
        <li>{props.listItem}</li>
      </div>
    )
}


// const textStyleDone = {
// textDecoration: "line-through",
// fontSize: "15px",
// color: "black"
// }
// const textStyle = {
// textDecoration: "none",
// fontSize: "20px",
// color: "green"
// }

// function createList(props) {

//   const [done, setDone] = useState(false);

//   function handleClick() {
  
//     setDone(prevValue => {
//       return !prevValue
//     });  
//     } 
//     return (
//       <div onClick={handleClick}>
//         <li  style= {done ? textStyleDone : textStyle}>{props.listItem}</li>
//       </div>
//     )
// }
export default createList;

// muzu mit i takto
// <li  style= {{ textDecoration: done ? "line-through" : "none"}}>{props.listItem}</li>
//<li  style= {done ? textStyleDone : textStyle}>{props.listItem}</li>