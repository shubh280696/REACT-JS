import React, { useRef } from "react";
import { Button } from "reactstrap";

export default function UseRef() {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  console.log("inputRef", inputRef);

  const focus = () => {
    inputRef.current.focus();
    inputRef.current.value = "Hello World shubh";
    divRef.current.style.backgroundColor = "black";
    divRef.current.style.color = "red";
    divRef.current.innerHTML = "red";
  };
  return (
    <>
      <h1>UseRef</h1>
      <input type="text" ref={inputRef} /> 
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "reds" }}
        ref={divRef}
      ></div>
      <Button onClick={() => focus()}>Focus On Input</Button>
    </>
  );
}