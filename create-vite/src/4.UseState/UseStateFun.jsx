import React, { useState } from 'react'
import { Button } from 'reactstrap';


export default function UseStateFun() {

  let [Count, SetCount] = useState(0);
  let x = 18;

  function inHandler(params) {
    console.log("🚀  ~ inHandler:", inHandler)
    SetCount(Count+2)
    
  }
  return (
    <>
    
      <h1> UseState</h1>

      <h1> x is{x}</h1>
      <h1> count is {Count}</h1>

      <Button color='danger'onClick={()=>inHandler()}>INC</Button>
       <br />
       <Button onClick={()=> SetCount(Count-3)}> DEC</Button>
    </>
  );
}
