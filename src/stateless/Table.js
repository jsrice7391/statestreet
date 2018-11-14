import React from "react";
import {Link} from "react-router";


const TableRow = (props) => {
    return (
            <tbody>
                {props.transactions.map((t, index) => (
                    <tr key={index}>
                        <td>{t.account}</td>
                        <td>{t.accountName}</td>
                        <td>{t.currencyCode}</td>
                        <td>{t.amount}</td>
                        <td>{t.transactionType}</td>
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
                <th key={index}>{col.toUpperCase()}</th>
            ))} 
            </tr>       
        </thead>
   
            <TableRow transactions={props.transactions}/>
        </table>
    )
}