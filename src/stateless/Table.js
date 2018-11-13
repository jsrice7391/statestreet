import React from "react";
import {Link} from "react-router";


const TableRow = (props) => {
    return (
            <tbody>
                {props.transactions.map((t, index) => (
                    <tr key={index}>
                        <td key={index}>{t["account"]}</td>
                    </tr>
                ))}
            </tbody>
    )
}
export const Table = (props) => {
    return (
        <table>
            <thead>  
                <tr>
            {props.columns.map((col, index) => (
                <th key={index}>{col}</th>
            ))} 
            </tr>       
        </thead>
   
            <TableRow transactions={props.transactions}/>
        </table>
    )
}