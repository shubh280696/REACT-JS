// import logo from './logo.svg';
import './App.css';
import { useState,React } from 'react';
import Form from './componet/Form';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// ------------------------state----------------
// function App() {
//   var x = 10;
//   function updatestate() {
//       x = 15;
//   }
//    console.log(x);
//    return (


//       <>
//           <h1> leaning state {x}</h1>
//           <button onClick={updatestate}>click me</button>
//       </>
//   )
// }
// ------------------------------usestate------------------------


function App(){
  // const [count, setcounter]= useState(0)

  //  function updatecount(){
  //   setcounter(count+1)
  //  }
  return(


    <>
    <Form/>
     {/* <h1>  button clicked {count} times</h1>
     <button onClick={updatecount}>click  </button> */}
    </>
  )
}



export default App;
