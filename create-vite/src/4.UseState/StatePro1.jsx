import React ,{useState} from 'react'
import { Button } from 'reactstrap';

export default function StatePro1() {

  let [index, setIndex] = useState(0);
  const colorArr = ["yellow", "red", "blue", "green", "lightcoral","pink","orange","cyan","purple","skyblue","hotpink","cadetblue"];

  function indexChange() {
    setIndex(index + 1);
  }

 
    if(index ==12)
    setIndex(0)
  confirm("index is now 12, restting to 0");

  if(index  ===12)
  setIndex(0)
 confirm(" index is now12, restting to 11")
 
  return (
    <>
      <h1>StatePro1</h1>
      <h1>index is {index}</h1>
      
      <div
        className="d-flex justify-content-center align-items-center "
        style={{
          minWidth: "100px",
          minHeight: "100px",
          backgroundColor: colorArr[index],
        }}
      >
        BOX
      </div>
      <br />
     <Button onClick={()=> indexChange()}>
      change color
     </Button>
    </>
  );
}



// import React, { useState } from "react";
// import { Button } from "reactstrap";

// export default function StatePro1() {
//   let [index, setIndex] = useState(0);
//   const colorArr = ["red", "green", "yellow", "blue", "lightcoral"];
//   function indexChnage() {
//     setIndex(index + 1); // condition
//   }
//   return (
//     <>
//       <h1>StatePro1</h1>
//       <h1>index is {index}</h1>
//       <div
//         className="d-flex justify-content-center align-items-center "
//         style={{
//           minWidth: "100px",
//           minHeight: "100px",
//           backgroundColor: colorArr[index],
//         }}
//       >
//         BOX
//       </div>
//       <br />

//       <Button color="danger" onClick={() => indexChnage()}>
//         Change Color
//       </Button>
//     </>
//   );
// }