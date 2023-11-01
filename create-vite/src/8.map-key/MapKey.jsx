import React from 'react'
import CardName from './CardName'
import { Button } from 'reactstrap'

const data= ["shubh","urvish" ,"teju"]
export default function Mapkey() {
  return (
    <>
       {/* <h1>Mapkey</h1>
       {data.map((e,i)=>{
        return   <h1 key={i}> my name is {e}</h1>
        
       })} */}


      {/* <h1> my name is {data[0]}</h1>
      <h1> my name is {data[2]}</h1>
      <h1> my name is {data[1]}</h1> */}
   
       {data.map((e,i)=>{
        return  <CardName  key={i} />
       })}
    </>
  )
}
