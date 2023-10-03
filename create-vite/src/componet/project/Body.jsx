import React, { Component } from 'react'
import "./index.css"
export default class Body extends Component {
  render() {
    return (
      <div className='container'>
        
        <div className='subcont' style={{width:"25vw", backgroundColor:'orange', border:"4px double black"}}> <h1>head 1</h1>  
         </div>
        <div className='subcont'style={{width:"35vw", backgroundColor:'white',color:'blue',border:"4px double black"}}> <h1>head 2</h1> 
        </div>
        <div className='subcont'style={{width:"25vw",backgroundColor:'green',border:"4px double black" }}> <h1>head 3</h1> 
        </div>
      </div>
    )
  }
}
