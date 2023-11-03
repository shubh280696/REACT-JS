
import React, { useEffect, useState } from 'react'
import { Eye, EyeOffIcon, Pencil, XCircle } from "lucide-react";
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'


export default function PasswordVisible() {
    let [userData, setUserdata] = useState({ firstName: "", lastName: "", age: "", email: "", password: "" })
    let [index, setIndex] = useState(null)
    let [updateMode, setUpdateMode] = useState(false)
    let [searchtext, setSearchtext] = useState("")
    let [showIndex, setShowIndex] = useState(null)

    const [userArr, setUserArr] = useState([])

    useEffect(() => {
        let data = localStorage.getItem("userData")
        let normaData = JSON.parse(data) || []
        let newData = normaData.filter((e) => {
            return e.firstName.toLowerCase().includes(searchtext.toLowerCase()) || e.age.includes(searchtext)
        })
        setUserArr(newData)
    }, [searchtext])

    // -----------------------------------INPUT

    let addDataToArr = () => {

        if (userData.email === "" || userData.password === "") {
            alert("Please fill the form first")
        } else {
            setUserArr([...userArr, userData])
            localStorage.setItem("userData", JSON.stringify([...userArr, userData]))
            setUserdata({ firstName: "", lastName: "", age: "", email: "", password: "" })
        }
    }

    // -------------------------------DELETE

    let deleteHandler = (index) => {
        const deleteData = window.confirm("Do you want to delete?");
        if (deleteData) {
            let filterData = userArr.filter((e, i) => {
                return i !== index
            })
            setUserArr(filterData)
            localStorage.setItem("userData", JSON.stringify(filterData))
        }
    }

    // ---------------------- UPDATE

    function updateHandler(data, index) {
        setUserdata({ ...data })
        setIndex(index)
        setUpdateMode(true)
    }

    function updateDataToArray() {
        if (index || index === 0)
            userArr.splice(index, 1, { ...userData })
        setUserArr([...userArr])
        localStorage.setItem("userData", JSON.stringify([...userArr]))
        setIndex(null)
        setUserdata({ firstName: "", lastName: "", age: "", email: "", password: "" })
        setUpdateMode(false)
    }

    function deleteAll() {
        const allDelete = window.confirm("Do you want to delete all data?");
        if (allDelete) {
            const allDeleteData = window.confirm("Are you sure delete all data?");
            if (allDeleteData) {
                setUserArr([]);
                localStorage.removeItem("userData")
            }
        }
    }



    return (
        <>
            <div className='formcss  w-100'>
                <Form className='mainclass text bg-black border p-5 border-warning rounded-4 text-white w-100' >
                    <FormGroup>
                        <Label for="firstName ">
                            <b>First Name </b>
                        </Label>
                        <Input
                            value={userData.firstName}
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first Name"
                            type="text"
                            onChange={(element) => setUserdata({ ...userData, firstName: element?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            <b>Last Name</b>
                        </Label>
                        <Input
                            value={userData.lastName}
                            id="lastname"
                            name="lastname"


                            placeholder="Enter your Last name"
                            type="text"
                            onChange={(element) => setUserdata({ ...userData, lastName: element?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            <b>Age</b>
                        </Label>
                        <Input
                            value={userData.age}
                            id="age"
                            name="age"
                            placeholder="Enter your Age"
                            type="number"
                            onChange={(element) => setUserdata({ ...userData, age: element?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            <b>Email</b>
                        </Label>
                        <Input
                            value={userData.email}
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            type="text"
                            onChange={(element) => setUserdata({ ...userData, email: element?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            <b>Password</b>
                        </Label>
                        <Input
                            value={userData.password}
                            id="password"
                            name="password"
                            placeholder="Enter your Password"
                            type="password"
                            onChange={(element) => setUserdata({ ...userData, password: element?.target?.value })}
                        />
                    </FormGroup>
                    {

                        updateMode ?
                            (<Button color='success' style={{
                                width: "100%"
                            }} onClick={() => updateDataToArray()}>Update</Button>)
                            : (<Button className='m-1 bg-light text-danger border-danger rounded-3' style={{
                                width: "100%"
                            }} onClick={() => addDataToArr()}>Submit</Button>)
                    }
                    <br />
                    <br />
                    <div className=' justify-content-center d-flex
                    '>
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </Form>
                <br />
                <br />
            </div>
            <div className="tablecss">
                <input
                    onChange={(e) => setSearchtext(e.target.value)}
                    placeholder='  Search Here ..... '
                    type="text"
                    className="border border-primary rounded-3 w-100 " />
                {userArr.length === 0 ? (" data not found ") :
                    (<Table hover className='subtable'>
                        <thead>
                            <tr>
                                <th>
                                    SR NO.
                                </th>
                                <th>
                                    First Name
                                </th>
                                <th>
                                    Last Name
                                </th>
                                <th>
                                    Age
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Password
                                </th>
                                <th
                                >Delete
                                </th>
                                <th>
                                    Edit
                                </th>
                                <th>
                                    Show Password
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                userArr.map((e, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">
                                                {i + 1}
                                            </th>
                                            <td>
                                                {e.firstName}
                                            </td>
                                            <td>
                                                {e.lastName}
                                            </td>
                                            <td>
                                                {e.age}
                                            </td>

                                            <td>
                                                {e.email}
                                            </td>
                                            <td>
                                                {showIndex === i ? e.password : "***"}
                                            </td>

                                            <td><XCircle color="#f50000" role='button' onClick={() => deleteHandler(i)} />
                                            </td>
                                            <td> <Pencil color="#f50000" role='button' onClick={() => updateHandler(e, i)} />
                                            </td>
                                            <td> <Eye color="#f50000" role='button' onClick={() => setShowIndex(i)} />
                                            </td>
                                            {/* <td> <Eyeoff color="#f50000" role='button' onClick={() => EyeOffIcon(i)} />
                                            </td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>)}
            </div>
            <div className='d-flex justify-content-center mt-3 ' >
                <Button color='danger' className='w-100 m-1 bg-light text-success' onClick={() => deleteAll()} >Delete all</Button></div>
        </>
    )
}