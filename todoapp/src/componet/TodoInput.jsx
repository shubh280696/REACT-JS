import React, { useState } from 'react'
import { Button } from 'reactstrap'
// import './App.css'
export default function TodoInput(props) {

  const [inputText, setInputText] = useState("")

  return (
    <>

<div className='main '>  

      <div className='input'>
        
        <input type="text" 
        // className='input-box-todo '
         placeholder='Enter your todo'
        value={inputText}
        onChange={e=>{setInputText(e.target.value)}}
        />
        <Button className='add-btn  'onClick={()=>{
          // props.addList(inputText)
          setInputText("")
        }}> + </Button>
        {/* <div>{inputText}</div>  */}
      </div>
       </div>
    </>
  )
}
