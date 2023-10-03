import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ClassCom from './componet/classcom.jsx'
import FunCom from './componet/FunCom.jsx'


// const arr =[ "shubh","urvi", "teju"]
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));

  
//   root.render(<div> 
//          <h1>hello shubhhhhh</h1>
//          <h1>hello anaa</h1>
//         <h1> {90 +100}</h1>
        
//         {arr.map((e) => {
//             console.log("🚀 arr.map ~ e:", e)
//             return <h1> my name is  {e}</h1>
//           })
//         }
//   </div>
    
    
    
//   );

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <ClassCom/>
    <ClassCom/>
   <FunCom/>
  </React.StrictMode>,
)
