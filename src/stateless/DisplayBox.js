import React from 'react';


export const DisplayBox = (props) => {
    const tran = props.tran;
    return (
        <div>
        <button onClick={props._toggleDetail()}>back</button><h1>Transaction {tran.account}</h1>
        <hr/>
        <div>
            {
                Object.keys(props.tran).forEach((keyName, keyIndex) =>{
                    console.log(`${keyName} and ${props.tran[keyName]}`)
                })
            }

        </div>
    </div>
    )
}