import React from 'react'

export default function PropFunsCom(props) {
  // console.log("🚀 : ~ PropFunsCom ~ props:", props)
  return (
    <div>
       
      <h1> My name is {props.name}</h1>
      <h2> My age is {props.age}</h2>
    </div>
  )
}

// //  same example --------------detructure-------------------
// export default function PropFunsCom({props,age}) {
//   // console.log("🚀 : ~ PropFunsCom ~ props:", props)
//   return (
//     <div>
       
//       <h1> My name is {name}</h1>
//       <h2> My age is {age}</h2>
//     </div>
//   )
// }
