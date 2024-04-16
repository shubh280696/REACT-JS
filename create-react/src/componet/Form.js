
import { useState } from "react";



function Form() {

    const data = { name: "", email: "", password: "" };
    const [inputData, setInputData] = useState(data)
    // const [flag, setFlag] =useState(false)


    function  handleData(e){
      setInputData({...inputData,[e.target.name]:e.target.value})
      console.log(inputData)
    }
    function handleeeData(e) {
          e.preventDefault();
          if(!inputData.name || inputData.email  || inputData.password){ 
            alert("All field are mandatory")
          }
         

        }
    return (
        <form className="container " onSubmit={handleeeData} >
            <div className="header">
                <h1>FORM</h1>
            </div>
            <div>
                <input type="text" name="name" placeholder="enter your name" value={inputData.name} onChange={handleData}></input>
            </div>
            <div>
                <input type="text" name="email" placeholder="enter your email" value={inputData.email} onChange={handleData}></input>
            </div>
            <div>
                <input type="text" name="password" placeholder="enter your password" value={inputData.password} onChange={handleData}>
                </input>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    );
}
export default Form;