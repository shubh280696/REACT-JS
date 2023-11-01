import React from 'react'
import DATA from "../../../../../task/data.json"
import { Table } from 'reactstrap'
console.log("🚀  DATA:", DATA)

export default function CityTable() {
    return (
        <>
            <Table >
                <thead>
                    <tr>
                        <th>
                          SR.
                        </th>
                        <th>
                            CITY
                        </th>
                        <th>
                            STATE
                        </th>
                        <th>
                             PUPOLATUON
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { DATA.map((e,i)=>{
                        return(
                            <tr key={i}>
                        <th >
                            {i}
                        </th>
                        <td>
                            {e.city}
                        </td>
                        <td>
                            {e.state_name}
                        </td>
                        <td>
                            {e?.population}
                        </td>
                    </tr>
                
                        );
                    })}
                    
                
                </tbody>
            </Table>
        </>
    )
}
