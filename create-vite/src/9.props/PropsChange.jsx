import React from 'react'




export default function PropsChange(props) {

    function changefun(){
        console.log("🚀 ~ :", changefun)
        // props.name= "shivam";
    }
  return (
    <div>
       <h1> Hello world... {props.name}</h1>
       <button style={{backgroundColor:'red'}} onClick={()=>changefun()}>change name</button>
    </div>
  );
}
