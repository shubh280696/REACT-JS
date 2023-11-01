
import React ,{useCallback,useEffect,useState}from 'react'
import { Button } from 'reactstrap'

export default function UseEffect() {
    let x=0;
    let [count, setCount]= useState(0);
    let [amount, setAmount]= useState(0);
    
    useEffect(()=>{
        console.log(" use effect every  time ----001");
    });
    useEffect(()=>{
        console.log(" ----use effect only first time-----002");
    },[])
 useEffect(()=>{
    if( count>10){
        alert("now  count is grater than 10")
    }
    console.log("---use effect o update of count ---03")
},[count]);
useEffect(()=>{
     
    
    console.log("---use effect o update of count and amount ---004")
},[count,amount]);



 useEffect(()=>{
    console.log("---use effect on update x----005")
 },[x])

 const incx =()=>{
    x=x+1;
    console.log("🚀 x:", x)
    
 }
  return (
    <>
      
      <h1> useEffect</h1>
      <h2> count is {count}</h2>
      <Button color='danger'onClick={()=>setCount(++count)}> Inc</Button>
      <h2>amount is {amount}</h2>
      <Button color='danger'onClick={()=>setAmount(++amount)}> inc- amount</Button>

      <Button color='danger' onClick={()=>incx()}> inc -x</Button>
    </>
  );
}




//  ----------class code----------

// import React, { useCallback, useEffect, useState } from "react";
// import { Button } from "reactstrap";

// export default function UseEffect() {
//   let x = 0;
//   let [count, setCount] = useState(0);
//   let [amount, setAmount] = useState(0);
//   useEffect(() => {
//     console.log("----use effcet every time----001");
//   });

//   useEffect(() => {
//     console.log("----use effcet only fiest time----002");
//   }, []);

//   useEffect(() => {
//     if (count > 10) {
//       alert("now count is greter then 10");
//     }
//     console.log("----use effcet on update of count----003");
//   }, [count]);

//   useEffect(() => {
//     console.log("----use effcet on update of count and amount----004");
//   }, [count, amount]);

//   useEffect(() => {
//     console.log("----use effcet on update x----005");
//   }, [x]);

//   const incX = () => {
//     x = x + 1;
//     console.log("x", x);
//   };
//   return (
//     <>
//       <h1>UseEffect</h1>
//       <h2>Count is {count}</h2>
//       <Button color="danger" onClick={() => setCount(++count)}>
//         Inc
//       </Button>
//       <h2>Amount is {amount}</h2>
//       <Button color="danger" onClick={() => setAmount(++amount)}>
//         Inc-amount
//       </Button>
//       <Button color="danger" onClick={() => incX()}>
//         Inc-x
//       </Button>
//     </>
//   );
// }