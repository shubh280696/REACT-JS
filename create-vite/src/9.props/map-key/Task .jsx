import React from 'react'
// import { Table } from 'reactstrap';
import DATA from "./product.json"
export default function Task() {
  return ( 
    <>
  
       <table style={{backgroundColor:"lightgray",width:"100%"}} >
                <thead style={{backgroundColor:'black',color:'white'}} >
                    <tr>
                        <th >
                          TITle
                        </th>
                        <th>
                            BRAND
                        </th>
                        <th>
                          CATEGORY
                        </th>
                        <th>
                            COLOR
                        </th>
                        <th>
                            SIZE
                        </th>
                    </tr>
                </thead>
                <tbody >
                    { DATA.map((e,i)=>{
                        return(
                            <tr key={i}>
                        <th style={{padding:'5px'}}>
                            {e.title}
                        </th>
                        <td>
                            {e.brand}
                        </td>
                        <td>
                            {e.category}
                        </td>
                        <td>
                            {e.color[1]}
                        </td>
                        <td>
                            {e.size[2]}
                        </td>
                    </tr>
                        );
                    })}
                    
                
                </tbody>
            </table>
          
    </>
  )
}
