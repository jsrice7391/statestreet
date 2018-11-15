import React, {
    Component
} from 'react';
import data from "../../data/data";



export class Transaction extends Component {
    state = {
        transaction:{}
    }
    componentWillMount(){
        const t = data.transactions.filter(n => n.account === this.props.match.params.id)
        this.setState({transaction:t[0] })
    }

    componentWillUnmount(){}

    
    render() {
        const {accountName, transactionType, amount, account, currencyCode} = this.state.transaction;
        return (
            <div>
            <h1>Transaction {account}</h1>   
            <hr/>
            <p><b>Account No.:</b> {account}</p>
            <p><b>Account Name:</b> {accountName}</p>
            <p><b>Currency Code:</b> {currencyCode}</p>
            <p><b>Amount:</b> {amount}</p>
            <p><b>Transaction Type:</b>{transactionType}</p>
            </div>

        )
    }
}