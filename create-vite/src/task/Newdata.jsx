

import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import { Trash2 } from "lucide-react";

export default function NewData() {
  let [email, setEmail] = useState("");
  let [userArr, setUserArr] = useState([]);
  let [password, setPassword] = useState("");

  const getData = (element) => {
    setEmail(element.target.value);
  };

  // add data to array
  const addDataToArr = () => {
    setUserArr([...userArr, email]);
    setEmail("");
  };
  // all data delete
  const deleteAlldata = () => {
    setUserArr([]);

  };
  // function submitData(e) {
  //   e.preventDefault();
  //   if (!email || password)
  //     alert("All field are mandatory")
  // }

  return (
    <>
      {/* <h1>Email is {email}</h1> */}
      {/* <h1>password is {password}</h1> */}
      <Form className="border p-5 border-dark rounded-4 col-5" >
        <FormGroup>
          <h1> Registration from</h1>
          <Label for="email">Email</Label>
          <Input
            value={email}
            id="email"
            name="email"
            placeholder="Enter your email"
            type="text"
            onChange={(e) => getData(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            onChange={(e) => setPassword(e?.target?.value)}
            placeholder="Enter your password"
            type="password"
          />
        </FormGroup>
        <Button onClick={() => addDataToArr()} color="warning" className="w-100 m-1">
          Submit
        </Button>
        <Button onClick={deleteAlldata} color="warning" className="w-100 m-1">Delete</Button>
      </Form>
      {userArr.map((e, i) => {
        return <h1 key={i}> Email{e}</h1>;
      })}

      {/* <h1>   Email is  {email}</h1> */}
      <h1>  password{password}</h1>

    </>
  );
}