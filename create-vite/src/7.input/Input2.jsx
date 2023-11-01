
import { FileSignature } from "lucide-react";

import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function InputData() {
    let [bike, setBike] = useState("");
    let [userArr, setUserArr] = useState([]);
    let [price, setPrice] = useState("");


    const getData = (element) => {
        setBike(element.target.value);
    };

    // add data to array
    const addDataToArr = () => {
        setUserArr([...userArr, bike]);
        setBike("");
        };

    const deleteAlldata = () => {
        setUserArr([]);
    };


    return (
        <>
            <h1>BIKE.... {bike}<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div></h1>
            <h1>PRICE.... {price}<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div></h1>
            <Form className="border p-4 border-dark rounded-4  col-6 text-info  bg-dark">
                <FormGroup>
                    <Label for="email">Bike</Label>
                    <Input
                        value={bike}
                        id="bike"
                        name="bike"
                        placeholder="Enter your bike"
                        type="text"
                        onChange={(e) => getData(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Price...</Label>
                    <Input
                        id="examplePassword"
                        name="price"
                        onChange={(e) => setPrice(e?.target?.value)}
                        placeholder="Enter your price"
                        type="price"
                    />
                </FormGroup>
                <Button onClick={() => addDataToArr()} color="warning" className="w-100 m-1" >
                    Submit
                </Button>
                <Button onClick={deleteAlldata} color="warning" className="w-100 m-1">Delete</Button>
            </Form>
            {userArr.map((e, i) => {
                return <h1 key={i}>My bike is {e}</h1>;
            })}
        </>
    );
}